# TaskManager

A task management application built with **Angular 21** that allows users to create, view, edit, and manage tasks, along with adding comments to individual tasks.

## Features

* **Create Tasks**

  * Create new tasks with relevant task information.
  * Validate task details before submission.

* **View Tasks**

  * View a list of all available tasks.
  * Open individual tasks to see their complete details.

* **Edit Tasks**

  * Update existing task information.
  * Modify task details whenever required.

* **Task Comments**

  * Add comments to individual tasks.
  * View comments associated with a task.
  * Reply to existing comments.

* **Task Management**

  * Organized task listing.
  * Dedicated views for creating, editing, and viewing tasks.

## Technologies Used

* **Angular 21**
* **TypeScript**
* **SCSS**
* **RxJS**
* **Angular Signals**
* **Vitest**
* **Angular CLI**

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Angular CLI

You can verify your installations with:

```bash
node --version
npm --version
ng version
```

### 1. Clone the Repository

```bash
git clone <repository-url>
```

Navigate into the project directory:

```bash
cd TaskManager
```

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Start the JSON Server

Run the JSON Server mock API:

```bash
npm run server
```

Once the JSON Server is running, the API endpoints will be available at:
```
http://localhost:3000
```

### 4. Start the Application in Development Mode

Run the Angular application:

```bash
npm run start
```

Once the development server is running, open your browser and navigate to:

```text
http://localhost:4200/
```
Now you can interact with the application and test its features. The application will automatically reload whenever you modify the source files.

To change the current user data navigate to:
```
src/app/core/services/auth/auth.service.ts
```

## Building the Application

To create a production build:

```bash
ng build
```

The compiled application will be generated inside the:

```text
dist/
```

directory.

Angular's production build automatically applies optimizations to improve application performance.


## Application Workflow

The general task workflow is:

```text
Task List
    │
    ├── Create Task
    │       └── Save Task
    │
    ├── View Task
    │       ├── Task Details
    │       └── Comments
    │
    └── Edit Task
            └── Update Task
```


### Creating a Task

1. Navigate to the task listing page.
2. Click Create Task.
3. Enter the required task information.
4. Submit the form.
5. The newly created task will appear in the task list.

### Viewing a Task

1. Navigate to the tasks page.
2. Select a task from the task list.
3. Click the View Task button on the task card.
4. View the complete task information.
5. View existing comments associated with the task.

### Editing a Task

1. Open the task you want to modify.
2. Select Edit.
3. Update the required information.
4. Save the changes.

### Adding Comments

1. Open a task's details page.
2. Navigate to the comments section.
3. Enter your comment.
4. Submit the comment.
5. The comment will be displayed under the task.

### Replying to Comments

1. Open a task's details page.
2. Locate the comment you want to reply to.
3. Click the Reply button on the comment.
4. Write your response in the modal that appears.
5. Click Comment to submit your reply.



### External Dependencies Used

* **angular-material** - Material Design components for Angular. Used for replay comment modal
* **json-server** - Mock REST API server for development
* **ngx-quill** - Rich text editor component for Angular
* **quill** - Core rich text editor library
* **sweetalert** - Beautiful alert dialogs. Used for showing confirmations and notifications


