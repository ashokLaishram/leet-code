function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root == null) return [];
  const queue = [root];
  const final: number[][] = [];
  let leftToRight = true;

  while (queue.length > 0) {
    let level: number[] = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift()!;
      level.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    if (!leftToRight) {
      level = level.reverse();
    }
    final.push(level);
    leftToRight = !leftToRight;
  }

  return final;
}
