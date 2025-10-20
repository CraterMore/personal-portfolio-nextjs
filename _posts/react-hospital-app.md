---
title: "Hospital React Web App"
context: "A React-Typescript web app developed in CS3733 Software Engineering over 7 weeks."
contextShort: "School Project"
coverImage: "/images/soft-eng/hero-page-cropped.png"
category: "Programming"
date: "Spring 2024"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
published: "2024-05-15"
---

During the last quarter of my sophomore year at WPI, I completed a course named Software Engineering. The course was designed to teach students the basics of software development through a comprehensive team project. I served as Lead Software Engineer on an 11-person team to apply Agile development methodologies and software design patterns in the creation of a web application prototype running on the cloud for Brigham and Women's Hospital. The final software application prototype included hospital pathfinding, a map editor, multiple integrated service request modules, a personal taskboard, and a hospital inventory system.

![Image](/images/soft-eng/hero-page.png "Screenshot of app")
*Application landing page*

## The Details

The web application was developed using React.js, Typescript, TailwindCSS, Material UI, Express, Prisma ORM, and PostgreSQL. Deployment on the cloud was accomplished using AWS EC, a Docker container, and AWS RDS to run the PostgreSQL server. This tech stack is the only piece of the project that was provided to our team at the start. From there, our team set out conducting user research, developing a prototype, and organizing our 7 weeks into week-long development sprints. 

![Image](/images/soft-eng/pathfinding.png "Screenshot of app")
*Navigation page providing directions within the hospital*

The application includes many different core features including a hospital pathfinding system, a map editor, and multiple integrated service request modules. Additionally, our project's differentiating features were designed with interconnectivity and user experience in mind. A taskboard system provides each staff member their own personal to-do list with the ability to automatically create to-do items in your list when a service request is assigned to you. A hopsital inventory system allows staff to manage what items the hospital has in storage and reference that inventory when creating service requests.

![Image](/images/soft-eng/request-page.png "Screenshot of app")
*Service request page for creating and viewing requests*

As the technical leader of the frontend group, I worked on features such as the personal task board, "drag-and-drop" node editing in the map editor, login with Auth0 authorization, and permission-based site access/routing. The layout and design of the application were implemented using TailwindCSS and Material UI with the goal of achieving a consistent style and ease of use. In order to do so, we created a style guide and mockups using Figma, as well as a component folder to store themed reusable components. The creation of use case diagrams and feedback from our peers also helped inform the core UX decisions we made throughout the project.

![Image](/images/soft-eng/task-board.png "Screenshot of app")
*Personal to-do list for hospital staff*

## Organizing as a Team

![Image](/images/soft-eng/map-editing.png "Screenshot of app")
*Map editing page for hospital staff*

As the Lead Software Engineer on the project, I was responsible for critical development decisions, the organization of the codebase, and the implementation of the core features. I also spent a significant amount of effort making sure that everyone on the team felt valued, and that everyone had a chance to make a meaningful contribution. I held "office hours" for my teammates, reviewed pull requests, and led development meetings. As the frontend lead - making sure that the UI was consistent and that the user experience was intuitive through features like "drag-and-drop" node editing on the map editor page and enforcing a consistent color scheme and design language. Having already taken courses in database systems, algorithms, and program design, this project served as a great opportunity to apply my knowledge in a real-world setting while exposing myself to new tools like React, and Prisma.

Each member of our team contributed code to multiple features and worked on a variety of tasks. Using the agile methodology, we conducted week-long sprints with user story planning, daily standups, and sprint retrospectives. We used Taiga.io to manage our user stories and issues, and GitHub to manage our codebase. Our primary form of communication was through Discord where we shared announcements, and used subchannels for each of our development groups to discuss problems and bugs.

## Takeaways

One of the most challenging aspects of the project was staying organized and on track as a team. It was easy to fall into a pattern of working on your own tasks and not communicating with the rest of the team - this made it hard to integrate everyone's work and divy up tasks effectively. There were also times where there was uncertainty or miscommunication between team members about what each of them were responsible for working on and when. To overcome this, I found it was important to be proactive in asking for and providing help, and making sure that everyone is on the same page regarding their tasks and responsibilites. This is something that is only achieved with effective and empathetic communication - which is a skill I employed and developed even further as the project progressed.

Overall, I am very proud of what my team and I accomplished in such a short amount of time. Our application is a fully functional prototype that could be used in a hospital setting with a very interconnected set of features and intuitive user experience. This project was enormously helpful in expanding my knowledge of web development and leadership skills. Working with such a large group of people with such short deadlines underlined how crucial it is to listen and communicate effectively. I grew my confidence in managing and supporting my groupmates - making sure to strike a balance between being a leader and a team player. I also became much more comfortable with the React framework, and web development in general. The class has allowed me to apply these skills to my work and personal projects at a rate and level of understanding that I did not previously have.

If I could change one thing about the journey of this team and our project, I would have liked to make better use of the tools we had for organizing and communicating. Our slow adoption of Taiga.io and the gaps in our communication were a source of frustration for many of us and often resulted in panic and worry as deadlines approached. Part of the issue is that tools like Taiga.io were typically an after-thought and not a primary focus in the flow of our development. Had we been more frequent in our use of these tools and more proactive in our communication, I believe our entire team could have achieved even more and reduced the stress that came with the project.