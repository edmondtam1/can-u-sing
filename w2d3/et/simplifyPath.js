// https://leetcode.com/problems/simplify-path/

// Given an absolute path for a file (Unix-style), simplify it. Or in other words, convert it to the canonical path.

// In a UNIX-style file system, a period . refers to the current directory. Furthermore, a double period .. moves the directory up a level.

// Note that the returned canonical path must always begin with a slash /, and there must be only a single slash / between two directory names. The last directory name (if it exists) must not end with a trailing /. Also, the canonical path must be the shortest string representing the absolute path.

const Stack = require('./Stack');

const simplifyPath = path => {
  const stack = new Stack();

  const segments = path.split('/');

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (segment === "." || segment === "") continue;
    if (segment === "..") {
      stack.pop();
    } else {
      stack.push(segment);
    }
  }

  let result = "";
  while (stack.peek()) {
    result = "/" + stack.pop() + result;
  }

  return !!result ? result : "/";
};

console.log(
  simplifyPath("/home/"), // "/home"
  simplifyPath("/../"), // "/"
  simplifyPath("/home//foo/"), // "/home/foo"
  simplifyPath("/a/./b/../../c/"), // "/c"
);