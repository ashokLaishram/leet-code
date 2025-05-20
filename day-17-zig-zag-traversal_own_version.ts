/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root == null) return [];
  let queue = [root];
  let output = [];
  let leftToRight = false;
  let subArray = [];
  let nextLevelQueue = [];

  while (queue.length > 0) {
    let currentItem: any = queue.pop();
    subArray.push(currentItem.val);

    if (!leftToRight) {
      if (currentItem.left) nextLevelQueue.push(currentItem.left);
      if (currentItem.right) nextLevelQueue.push(currentItem.right);
    } else {
      if (currentItem.right) nextLevelQueue.push(currentItem.right);
      if (currentItem.left) nextLevelQueue.push(currentItem.left);
    }

    if (queue.length == 0) {
      output.push(subArray);
      subArray = [];
      leftToRight = !leftToRight;
      queue = nextLevelQueue;
      nextLevelQueue = [];
    }
  }
  return output;
}
