type ElementParam = HTMLElement | string;

interface Task {
  id: number | string;
  name: string;
  startTime: string;
  endTime: string;
  progress: number;
  dependencies: string | string[]
}

interface GanttOptions {

}

interface SVGElementAttrs {
  appendTo: HTMLElement;
  innerHTML?: string;
  [k: string]: any;
}

export {
  ElementParam,
  Task,
  GanttOptions,
  SVGElementAttrs
}
