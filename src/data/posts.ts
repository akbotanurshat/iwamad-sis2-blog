import type { Post } from '../types/post'

export const posts: Post[] = [
  {
    id: 1,
    title: 'TypeScript basics: meet the types',
    excerpt: 'TypeScript is a language that adds static types to JavaScript. In this post we look at the basic types. When you know the type of every variable, you find mistakes early.',
    content: 'TypeScript is a language made by Microsoft. It adds a type system on top of JavaScript. You can use simple types like string, number and boolean. You can also type arrays and objects. The compiler shows errors before you run the code. That is why big projects use it: the code is safer and easier to read.',
    date: '2026-10-20',
  },
  {
    id: 2,
    title: 'React components: props vs state',
    excerpt: 'Props are data that come from a parent component and do not change. State is data inside a component that can change. It is important not to mix them up.',
    content: 'Props come from outside the component and you cannot change them inside it. This gives one-way data flow. State lives inside the component. You update it with the set... function that useState returns. When state changes, the component renders again. When the parent component renders again, the child component gets new props.',
    date: '2026-10-20',
  },
  {
    id: 3,
    title: 'How to make a good Git commit',
    excerpt: 'One commit should contain one logical change. The commit message should say clearly and shortly what you did.',
    content: 'A good commit is small and meaningful. It makes the project history easy to understand. If you put many unrelated changes in one commit, it is hard to find a bug later. Write the message as an answer to "what did I do?". For example: "Add five posts to the posts array".',
    date: '2026-10-20',
  },
  {
    id: 4,
    title: 'CSS Flexbox: the main properties',
    excerpt: 'Flexbox is a tool for placing elements in a flexible way. You start with display: flex.',
    content: 'When you set display: flex on a container, you can use justify-content to align items along the main axis. align-items aligns them along the cross axis. You can also change the direction with flex-direction. These properties are often used for navigation bars and card grids.',
    date: '2026-10-20',
  },
  {
    id: 5,
    title: 'Working with an API: fetch and async/await',
    excerpt: 'fetch is a built-in browser function that returns a Promise. async/await makes it easier to read.',
    content: 'fetch(url) returns a Promise, so you can wait for it with await. You read the response with the .json() method and get the data. Use try/catch to catch errors, because network errors can happen at any time.',
    date: '2026-10-20',
  },
]