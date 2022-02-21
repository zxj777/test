import { ElementParam, Task, GanttOptions } from './type'
import { getElement, createSvg } from './utils'

export default class Gantt {
  wrapper: HTMLElement 
  tasks: Task[] 
  options: GanttOptions 
  svg: SVGElement //?? = null
  constructor(el: ElementParam, tasks: Task[], options: GanttOptions) {
    const wrapper = getElement(el)

    if (!wrapper) {
      console.error('[Gantt warn]: Can not resolve the wrapper DOM.')
      return
    }
    this.getWrapper(wrapper)
    this.processTaskParam(tasks)
    this.mergeOptions(options)

  }

  getWrapper(wrapper: HTMLElement) {
    this.svg = createSvg('svg', {
      appendTo: wrapper,
      class: 'gantt'
    })
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('gantt-container');

    
  }

  mergeOptions(options: GanttOptions) {
    const defaultOptions = {

    }

    this.options =  Object.assign({}, defaultOptions, options)
  }

  processTaskParam(tasks: Task[]) {
    this.tasks =  tasks
  }
}
