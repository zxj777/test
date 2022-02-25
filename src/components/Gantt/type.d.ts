import type { Dayjs } from 'dayjs'

type ElementParam = HTMLElement | string;

interface TaskParam {
  id: number | string;
  name: string;
  startTime: string;
  endTime: string;
  progress: number;
  dependencies: string | string[]
}


interface Task extends TaskParam {
  _startTime: Dayjs;
  _endTime: Dayjs
}

interface GanttOptions {

}

interface SVGElementAttrs {
  appendTo?: Element;
  innerHTML?: string;
  [k: string]: any;
}

export {
  ElementParam,
  TaskParam,
  Task,
  GanttOptions,
  SVGElementAttrs
}
