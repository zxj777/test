import { ElementParam, Task, TaskParam, GanttOptions } from './type'
import { getElement, createSvg } from './utils'
import dayjs from 'dayjs'
export default class Gantt {
  $wrapper: HTMLElement 
  tasks: Task[] 
  options: GanttOptions 
  $svg: SVGElement //?? = null
  layers: any
  constructor(el: ElementParam, tasks: TaskParam[], options: GanttOptions) {
    const container = getElement(el)

    if (!container) {
      console.error('[Gantt warn]: Can not resolve the container DOM.')
      return
    }
    

    this.$svg = createSvg('svg', {
      class: 'gantt'
    })
    this.$wrapper = document.createElement('div');
    this.$wrapper.classList.add('gantt-container');

    container.appendChild(this.$wrapper);
    this.$wrapper.appendChild(this.$svg);
    // this.getWrapper(wrapper)
    this.processTaskParam(tasks)
    this.mergeOptions(options)
    this.setDates()
    this.render()
  }

  mergeOptions(options: GanttOptions) {
    const defaultOptions = {

    }

    this.options =  Object.assign({}, defaultOptions, options)
  }

  processTaskParam(tasks: TaskParam[]) {
    this.tasks = tasks.map((task) => {
      const _startTime = dayjs(task.startTime)
      const _endTime = dayjs(task.endTime)
      return {
        ...task,
        _startTime,
        _endTime
      }
    })
  }

  setDates() {
    this.setGanttDates()
    this.setDateValues()
  }

  setGanttDates() {
    this.ganttStart = this.ganttEnd = null
    for (let task of this.tasks) {

    }
  }

  setDateValues() {

  }

  render() {
    // this.clear()
    this.createLayers()
    this.make_grid();
  }

  createLayers() {
    this.layers = {};
      const layers = ['grid', 'date', 'arrow', 'progress', 'bar', 'details'];
      // make group layers
      for (let layer of layers) {
        this.layers[layer] = createSvg('g', {
          class: layer,
          appendTo: this.$svg
        });
      }
  }
  make_grid() {
    this.make_grid_background();
  };
  make_grid_background() {

  }
}
