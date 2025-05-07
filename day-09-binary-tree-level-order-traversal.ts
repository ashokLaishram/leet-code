/**https://leetcode.com/problems/binary-tree-level-order-traversal/description/** */

function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) return [];
  const queue = [root];
  const final: number[][] = [];
  while (queue.length > 0) {
    const level: number[] = [];
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift()!;
      level.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    final.push(level);
  }
  return final;
}
