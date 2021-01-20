import { TestBed } from '@angular/core/testing';

import { BreakpointDimension, BreakpointRegistryService, BreakpointUnits } from './breakpoint-registry.service';


describe('BreakpointRegistryService', () => {
  let service: BreakpointRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(BreakpointRegistryService);
  });

  describe('.addBreakpoint(name, size, units, dimension)', () => {
    it('adds a breakpoint definition', () => {
      service.addBreakpoint('foo', 1, BreakpointUnits.EM, BreakpointDimension.HEIGHT);
      expect(service.getBreakpoint('foo')).toEqual({
        name: 'foo',
        size: 1,
        units: BreakpointUnits.EM,
        dimension: BreakpointDimension.HEIGHT
      });
    });
  });

  describe('.getBreakpoint(name)', () => {
    it('returns undefined if the name does not match any breakpoints', () => {
      expect(service.getBreakpoint('qwe')).toBeUndefined();
    });

    it('returns a breakpoint definition if the name matches a previously added breakpoint', () => {
      service.addBreakpoint('bar', 0);
      expect(service.getBreakpoint('bar')).toBeDefined();
    });
  });
});
