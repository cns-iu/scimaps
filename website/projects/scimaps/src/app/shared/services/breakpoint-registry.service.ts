import { Injectable } from '@angular/core';

/**
 * Supported css units in breakpoints
 */
export enum BreakpointUnits {
  PX = 'px',
  EM = 'em',
  REM = 'rem'
}

/**
 * Dimension breakpoints can be applied to
 */
export enum BreakpointDimension {
  WIDTH = 'width',
  HEIGHT = 'height'
}

/**
 * A single breakpoint definition
 */
export interface Breakpoint {
  /** Name associated with the breakpoint */
  name: string;
  /** Dimension size */
  size: number;
  /** Dimension size units */
  units: BreakpointUnits;
  /** Dimension applied to */
  dimension: BreakpointDimension;
}


/**
 * Simple registry for adding/getting breakpoints
 */
@Injectable({
  providedIn: 'root'
})
export class BreakpointRegistryService {
  /**
   * Stored breakpoints
   */
  private readonly breakpoints: Record<string, Breakpoint> = {};

  /**
   * Adds a single breakpoint definition to the registry.
   * If the breakpoint already exists it is overridden with the new definition.
   *
   * @param name Name associated with breakpoint
   * @param size Dimension size
   * @param units Dimension size units
   * @param dimension Dimension breakpoint is applied to
   */
  addBreakpoint(
    name: string, size: number,
    units: BreakpointUnits = BreakpointUnits.PX,
    dimension: BreakpointDimension = BreakpointDimension.WIDTH
  ): void {
    this.breakpoints[name] = {
      name, size, units, dimension
    };
  }

  /**
   * Gets a breakpoint definition with the specified name
   *
   * @param name Name associated with breakpoint
   * @returns A breakpoint definition if found, undefined otherwise
   */
  getBreakpoint(name: string): Breakpoint | undefined {
    return this.breakpoints[name];
  }
}
