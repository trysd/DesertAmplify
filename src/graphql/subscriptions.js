/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          userId
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          userId
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          userId
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      userId
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      userId
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      userId
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoutineShip = /* GraphQL */ `
  subscription OnCreateRoutineShip {
    onCreateRoutineShip {
      id
      ship {
        items {
          id
          title
          userName
          capacity
          registered
          createdAt
          shipSize
          routineShipID
          updatedAt
        }
        nextToken
      }
      userName
      startTime
      endTime
      startDate
      endDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoutineShip = /* GraphQL */ `
  subscription OnUpdateRoutineShip {
    onUpdateRoutineShip {
      id
      ship {
        items {
          id
          title
          userName
          capacity
          registered
          createdAt
          shipSize
          routineShipID
          updatedAt
        }
        nextToken
      }
      userName
      startTime
      endTime
      startDate
      endDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoutineShip = /* GraphQL */ `
  subscription OnDeleteRoutineShip {
    onDeleteRoutineShip {
      id
      ship {
        items {
          id
          title
          userName
          capacity
          registered
          createdAt
          shipSize
          routineShipID
          updatedAt
        }
        nextToken
      }
      userName
      startTime
      endTime
      startDate
      endDate
      createdAt
      updatedAt
    }
  }
`;
export const onCreateShip = /* GraphQL */ `
  subscription OnCreateShip {
    onCreateShip {
      id
      title
      userName
      capacity
      registered
      crews {
        items {
          id
          shipID
          userName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      shipSize
      routineShipID
      updatedAt
    }
  }
`;
export const onUpdateShip = /* GraphQL */ `
  subscription OnUpdateShip {
    onUpdateShip {
      id
      title
      userName
      capacity
      registered
      crews {
        items {
          id
          shipID
          userName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      shipSize
      routineShipID
      updatedAt
    }
  }
`;
export const onDeleteShip = /* GraphQL */ `
  subscription OnDeleteShip {
    onDeleteShip {
      id
      title
      userName
      capacity
      registered
      crews {
        items {
          id
          shipID
          userName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      shipSize
      routineShipID
      updatedAt
    }
  }
`;
export const onCreateCrew = /* GraphQL */ `
  subscription OnCreateCrew {
    onCreateCrew {
      id
      shipID
      userName
      ship {
        id
        title
        userName
        capacity
        registered
        crews {
          nextToken
        }
        createdAt
        shipSize
        routineShipID
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCrew = /* GraphQL */ `
  subscription OnUpdateCrew {
    onUpdateCrew {
      id
      shipID
      userName
      ship {
        id
        title
        userName
        capacity
        registered
        crews {
          nextToken
        }
        createdAt
        shipSize
        routineShipID
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCrew = /* GraphQL */ `
  subscription OnDeleteCrew {
    onDeleteCrew {
      id
      shipID
      userName
      ship {
        id
        title
        userName
        capacity
        registered
        crews {
          nextToken
        }
        createdAt
        shipSize
        routineShipID
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
