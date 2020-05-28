/**
Given an absolute path for a file (Unix-style), simplify it. Or in other words, convert it to the canonical path.

In a UNIX-style file system, a period . refers to the current directory. Furthermore, a double period .. moves the directory up a level.

Note that the returned canonical path must always begin with a slash /, and there must be only a single slash / between two directory names. 
The last directory name (if it exists) must not end with a trailing /.
Also, the canonical path must be the shortest string representing the absolute path.
 */

/**
 * /a/b/c/d/././..
 * - Split into array by '/'
 *  - ['',  'a',  '',  'b','',  '',   '',  'c', 'd', '',   '.', '.', '',  '..']
 * - Ignore spaces and . and /
 * - Start stack with '/'
 * - Iterate from front to back pushing other items + '/'
 * - If '..', pop last item
 */

const simplifyPath = path => {
  const pathArr = path.split('/');
  const toIgnore = ['', '.', '..'];
  const simplePath = [];

  pathArr.forEach(el => {
    if (el === '..' && simplePath[0]) {
      simplePath.pop();
    } else if (!toIgnore.includes(el)) {
      simplePath.push(el);
    }
  });

  // @TODO add a opening '/'
  console.log(pathArr);
  return '/' + simplePath.join('/');
};

console.log(simplifyPath('/a/../../b/../c//.//'));
console.log(simplifyPath('/a//b////c/d//././/..'));
