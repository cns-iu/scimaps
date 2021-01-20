import { defer } from 'rxjs';
import { Shallow } from 'shallow-render';

import { BreakpointDimension, BreakpointRegistryService, BreakpointUnits } from '../services/breakpoint-registry.service';
import { MediaQueryService } from '../services/media-query.service';
import { SharedModule } from '../shared.module';
import { BreakpointDirective } from './breakpoint.directive';


describe('BreakpointDirective', () => {
  let getBreakpoint: jasmine.Spy<typeof BreakpointRegistryService.prototype.getBreakpoint>;
  let createStream: jasmine.Spy<typeof MediaQueryService.prototype.createStream>;
  let shallow: Shallow<BreakpointDirective>;

  beforeEach(() => {
    getBreakpoint = jasmine.createSpy();
    createStream = jasmine.createSpy();

    shallow = new Shallow(BreakpointDirective, SharedModule)
      .mock(BreakpointRegistryService, { getBreakpoint })
      .mock(MediaQueryService, { createStream });
  });

  describe('when queries match', () => {
    beforeEach(() => {
      getBreakpoint.and.returnValue({
        name: 'foo', size: 10, units: BreakpointUnits.PX,
        dimension: BreakpointDimension.WIDTH
      });
      createStream.and.returnValue(defer(() => [true]));
    });

    it('shows content', async () => {
      const { element } = await shallow.render(`<div *sciBreakpoint="'foo'"></div>`);
      expect(element).toBeDefined();
    });

    it('accepts a trailing modifier', async () => {
      const { element } = await shallow.render(`<div *sciBreakpoint="'foo-'"></div>`);
      expect(element).toBeDefined();
    });

    it('accepts "then" template', async () => {
      const { element } = await shallow.render(`
        <ng-container *sciBreakpoint="'foo'; then: test"></ng-container>
        <ng-template #test><div>Foo</div></ng-template>
      `);

      expect(element).toBeDefined();
    });

    it('does not show content if "then" template is undefined', async () => {
      const { element } = await shallow.render(`
        <ng-container *sciBreakpoint="'foo'; then: undefined"></ng-container>
      `);

      expect(element).not.toBeDefined();
    });
  });

  describe('when queries do not match', () => {
    beforeEach(() => {
      getBreakpoint.and.returnValue(undefined);
      createStream.and.returnValue(defer(() => [false]));
    });

    it('does not show content', async () => {
      const { element } = await shallow.render(`<div *sciBreakpoint="'bar'"></div>`);
      expect(element).not.toBeDefined();
    });

    it('shows "else" template if provided', async () => {
      const { element } = await shallow.render(`
        <ng-container *sciBreakpoint="'bar'; else: test"></ng-container>
        <ng-template #test><div>Foo</div></ng-template>
      `);

      expect(element).toBeDefined();
    });
  });
});
