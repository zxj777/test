<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>


<template>
  <div id="container"></div>
  <div id="tt"></div>
</template>

<script lang="ts">
import Gantt from './components/Gantt'
import Gg from './components/gt/src/index'
export default {
  mounted() {
    new Gantt('#container', [], {})
    new Gg('#tt', [
			{
				start: '2014-10-01',
				end: '2014-10-08',
				name: 'Redesign website',
				id: "Task 0",
				progress: 20
			},
			{
				start: '2014-10-03',
				end: '2014-10-06',
				name: 'Write new content',
				id: "Task 1",
				progress: 5,
				dependencies: 'Task 0'
			},
			{
				start: '2014-10-04',
				end: '2014-10-08',
				name: 'Apply new styles',
				id: "Task 2",
				progress: 10,
				dependencies: 'Task 1'
			},
			{
				start: '2014-10-08',
				end: '2014-10-09',
				name: 'Review',
				id: "Task 3",
				progress: 5,
				dependencies: 'Task 2'
			},
			{
				start: '2014-10-08',
				end: '2014-10-10',
				name: 'Deploy',
				id: "Task 4",
				progress: 0,
				dependencies: 'Task 2'
			},
			{
				start: '2014-10-11',
				end: '2014-10-11',
				name: 'Go Live!',
				id: "Task 5",
				progress: 0,
				dependencies: 'Task 4',
				custom_class: 'bar-milestone'
			},
		],{
			on_click: function (task) {
				console.log(task);
			},
			on_date_change: function(task, start, end) {
				console.log(task, start, end);
			},
			on_progress_change: function(task, progress) {
				console.log(task, progress);
			},
			on_view_change: function(mode) {
				console.log(mode);
			},
			view_mode: 'Day',
			language: 'zh'
		})
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
