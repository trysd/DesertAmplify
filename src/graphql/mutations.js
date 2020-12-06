/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const registerShip = /* GraphQL */ `
  mutation RegisterShip(
    $expectRegValue: Int
    $userName: String
    $shipId: String
  ) {
    registerShip(
      expectRegValue: $expectRegValue
      userName: $userName
      shipId: $shipId
    ) {
      status
      body
    }
  }
`;
export const testHttpX1 = /* GraphQL */ `
  mutation TestHttpX1($request: String) {
    testHttpX1(request: $request) {
      status
      body
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createRoutineShip = /* GraphQL */ `
  mutation CreateRoutineShip(
    $input: CreateRoutineShipInput!
    $condition: ModelRoutineShipConditionInput
  ) {
    createRoutineShip(input: $input, condition: $condition) {
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
export const updateRoutineShip = /* GraphQL */ `
  mutation UpdateRoutineShip(
    $input: UpdateRoutineShipInput!
    $condition: ModelRoutineShipConditionInput
  ) {
    updateRoutineShip(input: $input, condition: $condition) {
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
export const deleteRoutineShip = /* GraphQL */ `
  mutation DeleteRoutineShip(
    $input: DeleteRoutineShipInput!
    $condition: ModelRoutineShipConditionInput
  ) {
    deleteRoutineShip(input: $input, condition: $condition) {
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
export const createShip = /* GraphQL */ `
  mutation CreateShip(
    $input: CreateShipInput!
    $condition: ModelShipConditionInput
  ) {
    createShip(input: $input, condition: $condition) {
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
export const updateShip = /* GraphQL */ `
  mutation UpdateShip(
    $input: UpdateShipInput!
    $condition: ModelShipConditionInput
  ) {
    updateShip(input: $input, condition: $condition) {
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
export const deleteShip = /* GraphQL */ `
  mutation DeleteShip(
    $input: DeleteShipInput!
    $condition: ModelShipConditionInput
  ) {
    deleteShip(input: $input, condition: $condition) {
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
export const createCrew = /* GraphQL */ `
  mutation CreateCrew(
    $input: CreateCrewInput!
    $condition: ModelCrewConditionInput
  ) {
    createCrew(input: $input, condition: $condition) {
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
export const updateCrew = /* GraphQL */ `
  mutation UpdateCrew(
    $input: UpdateCrewInput!
    $condition: ModelCrewConditionInput
  ) {
    updateCrew(input: $input, condition: $condition) {
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
export const deleteCrew = /* GraphQL */ `
  mutation DeleteCrew(
    $input: DeleteCrewInput!
    $condition: ModelCrewConditionInput
  ) {
    deleteCrew(input: $input, condition: $condition) {
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
