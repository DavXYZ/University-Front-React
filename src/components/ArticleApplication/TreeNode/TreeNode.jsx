import styles from './TreeNode.module.css';
import { ChevronDown, ChevronRight } from 'lucide-react';

const TreeNode = ({ node, selectedField, onFieldSelect, expandedNodes, onToggleExpand, level }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedField === node.id;

  return (
    <div className={styles.treeNode}>
      <div
        className={`${styles.nodeContent} ${isSelected ? styles.selected : ''}`}
        style={{ paddingLeft: `${level * 24 + 8}px` }}
      >
        {/* Expand/Collapse button */}
        <div className={styles.expandButtonContainer}>
          {hasChildren && (
            <button
              type="button"
              onClick={() => onToggleExpand(node.id)}
              className={styles.expandButton}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
        </div>

        {/* Selection radio button */}
        <div className={styles.radioButtonContainer}>
          <button
            type="button"
            onClick={() => onFieldSelect(node.id)}
            className={`${styles.radioButton} ${isSelected ? styles.radioButtonSelected : ''}`}
          >
            {isSelected && <div className={styles.radioButtonInner} />}
          </button>
        </div>

        {/* Label */}
        <span
          className={`${styles.nodeLabel} ${isSelected ? styles.selectedLabel : ''}`}
          onClick={() => onFieldSelect(node.id)}
        >
          {node.label}
        </span>
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className={styles.childrenContainer}>
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              selectedField={selectedField}
              onFieldSelect={onFieldSelect}
              expandedNodes={expandedNodes}
              onToggleExpand={onToggleExpand}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;