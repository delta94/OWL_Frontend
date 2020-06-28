const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'Liquid',
      title:'Views overall'
    },
    'task-2': {
      id: 'task-2',
      content: 'Gauge',
      title:'Sentimental overall'
    },
    'task-3': {
      id: 'task-3',
      content: 'Donut',
      title:'Reaction overall'
    },
    'task-4': {
      id: 'task-4',
      content: 'Radar',
      title:'Features overall'
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: '',
      taskIds: ['task-1', 'task-3']
    },
    'column-2': {
      id: 'column-2',
      title: '',
      taskIds: ['task-2', 'task-4']
    }
  },
  columnOrder: ['column-1', 'column-2']
};

export default initialData