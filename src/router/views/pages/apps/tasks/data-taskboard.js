const tasks = [
  {
    id: 1,
    status: 'Todo',
    items: [
      {
        id: 1,
        title: 'iOS App home page',
        dueDate: 'Jan 16, 2019',
        priority: 'High',
        user: require('@assets/images/users/avatar-2.jpg'),
        comments: 7,
        subTasks: '1/4',
        groupId: 1,
      },
      {
        id: 2,
        title: 'Topnav layout design',
        dueDate: 'Jan 22, 2019',
        priority: 'Low',
        user: require('@assets/images/users/avatar-7.jpg'),
        comments: 11,
        subTasks: '3/7',
        groupId: 1,
      },
      {
        id: 3,
        title: 'Invite user to a project',
        dueDate: 'Feb 08, 2019',
        priority: 'Normal',
        user: require('@assets/images/users/avatar-2.jpg'),
        comments: 10,
        subTasks: '1/1',
        groupId: 1,
      },
    ],
  },
  {
    id: 2,
    status: 'In Progress',
    items: [
      {
        id: 4,
        title: 'Write a release note',
        dueDate: 'Feb 12, 2019',
        priority: 'Low',
        user: require('@assets/images/users/avatar-7.jpg'),
        comments: 11,
        subTasks: '4/11',
        groupId: 2,
      },
      {
        id: 5,
        title: 'Enable analytics tracking',
        dueDate: 'Jan 31, 2019',
        priority: 'Normal',
        user: require('@assets/images/users/avatar-7.jpg'),
        comments: 2,
        subTasks: '1/3',
        groupId: 2,
      },
    ],
  },
  {
    id: 3,
    status: 'Review',
    items: [
      {
        id: 6,
        title: 'Kanban board design',
        comments: 101,
        subTasks: '11/32',
        dueDate: 'Mar 27, 2019',
        priority: 'High',
        user: require('@assets/images/users/avatar-7.jpg'),
        groupId: 3,
      },
      {
        id: 7,
        title: 'Implement HTML email template',
        comments: 14,
        subTasks: '3/5',
        dueDate: 'Mar 27, 2019',
        priority: 'Normal',
        user: require('@assets/images/users/avatar-7.jpg'),
        groupId: 3,
      },
    ],
  },
  {
    id: 4,
    status: 'Done',
    items: [
      {
        id: 8,
        title: 'Dashboard design',
        dueDate: '21 Jul 2019',
        priority: 'High',
        user: require('@assets/images/users/avatar-7.jpg'),
        comments: 121,
        subTasks: '24/24',
        groupId: 4,
      },
    ],
  },
]

export { tasks }