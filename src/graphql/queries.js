/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        postID
        post {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoutineShip = /* GraphQL */ `
  query GetRoutineShip($id: ID!) {
    getRoutineShip(id: $id) {
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
export const listRoutineShips = /* GraphQL */ `
  query ListRoutineShips(
    $filter: ModelRoutineShipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutineShips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ship {
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
      nextToken
    }
  }
`;
export const getShip = /* GraphQL */ `
  query GetShip($id: ID!) {
    getShip(id: $id) {
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
export const listShips = /* GraphQL */ `
  query ListShips(
    $filter: ModelShipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCrew = /* GraphQL */ `
  query GetCrew($id: ID!) {
    getCrew(id: $id) {
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
export const listCrews = /* GraphQL */ `
  query ListCrews(
    $filter: ModelCrewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCrews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        shipID
        userName
        ship {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
