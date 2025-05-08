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

function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  let result = [];
  let stack = [root];
  while (stack.length > 0) {
    let popedItem = stack.pop();
    let value = popedItem.val;
    result.push(value);
    if (popedItem.right) stack.push(popedItem.right);
    if (popedItem.left) stack.push(popedItem.left);
  }
  return result;
}
