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

* **Node.js**
* **npm**
* **Angular CLI**

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

### 3. Start the Development Server

Run the Angular development server:

```bash
ng serve
```

Once the server is running, open your browser and navigate to:

```text
http://localhost:4200/
```

The application will automatically reload whenever you modify the source files.

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
2. Click **Create Task**.
3. Enter the required task information.
4. Submit the form.
5. The newly created task will appear in the task list.

### Viewing a Task

1. Select a task from the task list.
2. Open the task details page.
3. View the complete task information.
4. View existing comments associated with the task.

### Editing a Task

1. Open the task you want to modify.
2. Select **Edit**.
3. Update the required information.
4. Save the changes.

### Adding Comments

1. Open a task's details page.
2. Navigate to the comments section.
3. Enter your comment.
4. Submit the comment.
5. The comment will be displayed under the task.

## Angular CLI

This project was generated using **Angular CLI 21.2.19**.

Useful Angular CLI commands:

```bash
# Start development server
ng serve

# Build the application
ng build

# Run unit tests
ng test

# Generate a component
ng generate component component-name

# Display Angular CLI help
ng help
```

## Dependencies

Install all required dependencies with:

```bash
npm install
```

The exact versions of the project's dependencies are defined in:

```text
package.json
```

and

```text
package-lock.json
```


