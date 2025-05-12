function diamterOfABinaryTree(root: TreeNode | null): number {
  if (root === null) return 0;
  let maxDiameterWidth = 0;

  function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    maxDiameterWidth = Math.max(maxDiameterWidth, left + right);
    return 1 + Math.max(left, right);
  }

  maxDepth(root);
  return maxDiameterWidth;
}
