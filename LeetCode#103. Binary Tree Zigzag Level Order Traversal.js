/**
Given a binary tree, return the zigzag level order traversal of its nodes' values. 
(ie, from left to right, then right to left for the next level and alternate between).

  3
   / \
  9  20
    /  \
   15   7
   
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
 */
 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let results = [];
    
    //Main Logic
    const levelOrderTraversal = (root, level) => {
        if(!root) return;
        
        if(results[level]){
            results[level].push(root.val);
        } else {
            results[level] = [root.val];
        }
    //Main Logic
        
        levelOrderTraversal(root.left, level + 1);
        levelOrderTraversal(root.right, level + 1);    
    }
    
    levelOrderTraversal(root, 0);
    
    return results.map((bucket,index) => (index % 2)? bucket.reverse() : bucket);
};
