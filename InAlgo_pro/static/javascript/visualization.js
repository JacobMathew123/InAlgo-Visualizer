const structureNotesUrls = {
    array: 'https://www.geeksforgeeks.org/dsa/array-data-structure-guide/',
    stack: 'https://www.programiz.com/dsa/stack',
    simplequeue: 'https://www.programiz.com/dsa/queue',
    circularqueue: 'https://www.programiz.com/dsa/queue',
    priorityqueue: 'https://www.programiz.com/dsa/heap-data-structure',
    deque: 'https://www.programiz.com/dsa/queue',
    linkedlist: 'https://www.programiz.com/dsa/linked-list',
    singlylinkedlist: 'https://www.programiz.com/dsa/linked-list',
    doublylinkedlist: 'https://www.programiz.com/dsa/linked-list',
    circularlinkedlist: 'https://www.programiz.com/dsa/linked-list',
    hashtable: 'https://www.programiz.com/dsa/hash-table',
    heap: 'https://www.programiz.com/dsa/heap-data-structure',
    maxheap: 'https://www.programiz.com/dsa/heap-data-structure',
    minheap: 'https://www.programiz.com/dsa/heap-data-structure',
    binomialheap: 'https://www.programiz.com/dsa/heap-data-structure',
    fibonacciheap: 'https://www.programiz.com/dsa/heap-data-structure',
    binarytree: 'https://www.programiz.com/dsa/binary-tree',
    bst: 'https://www.programiz.com/dsa/binary-search-tree',
    avltree: 'https://www.programiz.com/dsa/avl-tree',
    redblacktree: 'https://www.programiz.com/dsa/binary-search-tree',
    btree: 'https://www.programiz.com/dsa/binary-tree',
    bplustree: 'https://www.programiz.com/dsa/binary-tree',
    prefixtree: 'https://www.programiz.com/dsa/binary-tree',
    trie: 'https://www.programiz.com/dsa/binary-tree',
    suffixtree: 'https://www.programiz.com/dsa/binary-tree',
    inorder: 'https://www.programiz.com/dsa/binary-tree',
    preorder: 'https://www.programiz.com/dsa/binary-tree',
    postorder: 'https://www.programiz.com/dsa/binary-tree',
    levelorder: 'https://www.programiz.com/dsa/binary-tree',
    graph: 'https://www.programiz.com/dsa/graph',
    graphalgo: 'https://www.programiz.com/dsa/graph',
    bfs: 'https://www.programiz.com/dsa/graph',
    dfs: 'https://www.programiz.com/dsa/graph',
    prims: 'https://www.programiz.com/dsa/graph',
    kruskals: 'https://www.programiz.com/dsa/graph',
    dijkstra: 'https://www.programiz.com/dsa/dijkstra-algorithm',
    bellmanford: 'https://www.programiz.com/dsa/dijkstra-algorithm',
    floydwarshall: 'https://www.programiz.com/dsa/dijkstra-algorithm',
    astar: 'https://www.programiz.com/dsa/dijkstra-algorithm',
    cycledetection: 'https://www.programiz.com/dsa/graph',
    topologicalsort: 'https://www.programiz.com/dsa/graph',
    connectedcomponents: 'https://www.programiz.com/dsa/graph',
    linearsearch: 'https://www.programiz.com/dsa/linear-search',
    binarysearch: 'https://www.programiz.com/dsa/binary-search',
    bubblesort: 'https://www.programiz.com/dsa/bubble-sort',
    selectionsort: 'https://www.programiz.com/dsa/selection-sort',
    insertionsort: 'https://www.programiz.com/dsa/insertion-sort',
    mergesort: 'https://www.programiz.com/dsa/merge-sort',
    quicksort: 'https://www.programiz.com/dsa/quick-sort',
    heapsort: 'https://www.programiz.com/dsa/heap-data-structure',
    shellsort: 'https://www.programiz.com/dsa/sorting-algorithm',
    countingsort: 'https://www.programiz.com/dsa/counting-sort',
    radixsort: 'https://www.programiz.com/dsa/radix-sort',
    bucketsort: 'https://www.programiz.com/dsa/sorting-algorithm'
};

/**
 * InAlgo Visualizer - Video Player Animation Engine
 * Starts from EMPTY state for full video playback and animates every operation step-by-step.
 */

const structureConfig = {
    array: {
        title: 'Array',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert' },
            { id: 'delete', label: 'Delete' },
            { id: 'search', label: 'Search' }
        ]
    },
    stack: {
        title: 'Stack',
        initial: [],
        operations: [
            { id: 'push', label: 'Push' },
            { id: 'pop', label: 'Pop' },
            { id: 'search', label: 'Search' }
        ]
    },
    queue: {
        title: 'Simple Queue',
        initial: [],
        operations: [
            { id: 'enqueue', label: 'Enqueue' },
            { id: 'dequeue', label: 'Dequeue' },
            { id: 'search', label: 'Search' }
        ]
    },
    simplequeue: {
        title: 'Simple Queue',
        initial: [],
        operations: [
            { id: 'enqueue', label: 'Enqueue' },
            { id: 'dequeue', label: 'Dequeue' },
            { id: 'search', label: 'Search' }
        ]
    },
    circularqueue: {
        title: 'Circular Queue',
        initial: [],
        operations: [
            { id: 'enqueue', label: 'Enqueue (Rear)' },
            { id: 'dequeue', label: 'Dequeue (Front)' },
            { id: 'search', label: 'Search' }
        ]
    },
    priorityqueue: {
        title: 'Priority Queue',
        initial: [],
        operations: [
            { id: 'insertpriority', label: 'Insert Element' },
            { id: 'dequeue', label: 'Extract Highest Priority' },
            { id: 'search', label: 'Search' }
        ]
    },
    deque: {
        title: 'Deque (Double-Ended Queue)',
        initial: [],
        operations: [
            { id: 'addfront', label: 'Add Front' },
            { id: 'enqueue', label: 'Add Rear' },
            { id: 'dequeue', label: 'Remove Front' },
            { id: 'removerear', label: 'Remove Rear' },
            { id: 'search', label: 'Search' }
        ]
    },
    linkedlist: {
        title: 'Singly Linked List',
        initial: [],
        operations: [
            { id: 'append', label: 'Append' },
            { id: 'delete', label: 'Delete' },
            { id: 'search', label: 'Search' }
        ]
    },
    singlylinkedlist: {
        title: 'Singly Linked List',
        initial: [],
        operations: [
            { id: 'append', label: 'Append' },
            { id: 'delete', label: 'Delete' },
            { id: 'search', label: 'Search' }
        ]
    },
    doublylinkedlist: {
        title: 'Doubly Linked List',
        initial: [],
        operations: [
            { id: 'append', label: 'Append' },
            { id: 'delete', label: 'Delete' },
            { id: 'search', label: 'Search' }
        ]
    },
    circularlinkedlist: {
        title: 'Circular Linked List',
        initial: [],
        operations: [
            { id: 'append', label: 'Append' },
            { id: 'delete', label: 'Delete' },
            { id: 'search', label: 'Search' }
        ]
    },
    hashtable: {
        title: 'Hash Table (Chaining / Buckets)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert Key' },
            { id: 'search', label: 'Search Key' },
            { id: 'delete', label: 'Delete Key' }
        ]
    },
    // Heaps
    heap: {
        title: 'Max Heap (Binary)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert & Sift-Up' },
            { id: 'extractmax', label: 'Extract Max' },
            { id: 'heapify', label: 'Build Max Heap' }
        ]
    },
    maxheap: {
        title: 'Max Heap (Binary)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert & Sift-Up' },
            { id: 'extractmax', label: 'Extract Max' },
            { id: 'heapify', label: 'Build Max Heap' }
        ]
    },
    minheap: {
        title: 'Min Heap (Binary)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert & Sift-Up' },
            { id: 'extractmin', label: 'Extract Min' },
            { id: 'heapify', label: 'Build Min Heap' }
        ]
    },
    binomialheap: {
        title: 'Binomial Heap (Forest of Binomial Trees)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert Node' },
            { id: 'extractmin', label: 'Extract Min' },
            { id: 'union', label: 'Merge Trees (Union)' }
        ]
    },
    fibonacciheap: {
        title: 'Fibonacci Heap (Doubly Linked Roots)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert Key' },
            { id: 'extractmin', label: 'Extract Min' },
            { id: 'decreasekey', label: 'Decrease Key' }
        ]
    },
    // Tree Traversals
    inorder: {
        title: 'Inorder Traversal (Left -> Root -> Right)',
        initial: [50, 30, 70, 20, 40, 60, 80],
        operations: [
            { id: 'inorder', label: 'Run Inorder Traversal' }
        ]
    },
    preorder: {
        title: 'Preorder Traversal (Root -> Left -> Right)',
        initial: [50, 30, 70, 20, 40, 60, 80],
        operations: [
            { id: 'preorder', label: 'Run Preorder Traversal' }
        ]
    },
    postorder: {
        title: 'Postorder Traversal (Left -> Right -> Root)',
        initial: [50, 30, 70, 20, 40, 60, 80],
        operations: [
            { id: 'postorder', label: 'Run Postorder Traversal' }
        ]
    },
    levelorder: {
        title: 'Level Order Traversal (Breadth-First Search)',
        initial: [50, 30, 70, 20, 40, 60, 80],
        operations: [
            { id: 'levelorder', label: 'Run Level Order Traversal' }
        ]
    },
    // Trees & Traversals
    binarytree: {
        title: 'Binary Tree',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert Node' },
            { id: 'inorder', label: 'Inorder Traversal' },
            { id: 'preorder', label: 'Preorder Traversal' },
            { id: 'postorder', label: 'Postorder Traversal' },
            { id: 'levelorder', label: 'Level Order (BFS)' }
        ]
    },
    bst: {
        title: 'Binary Search Tree (BST)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert' },
            { id: 'search', label: 'Search' },
            { id: 'delete', label: 'Delete' },
            { id: 'inorder', label: 'Inorder Traversal' }
        ]
    },
    avltree: {
        title: 'AVL Tree (Self-Balancing)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert & Rotate' },
            { id: 'delete', label: 'Delete Node' },
            { id: 'inorder', label: 'Inorder Traversal' }
        ]
    },
    redblacktree: {
        title: 'Red-Black Tree',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert Node' },
            { id: 'delete', label: 'Delete Node' },
            { id: 'search', label: 'Search' }
        ]
    },
    btree: {
        title: 'B-Tree (Multiway Tree)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert Key' },
            { id: 'search', label: 'Search Key' },
            { id: 'delete', label: 'Delete Key' }
        ]
    },
    bplustree: {
        title: 'B+ Tree (Index & Leaf Link)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert Key' },
            { id: 'search', label: 'Search Key' },
            { id: 'inorder', label: 'Leaf Traversal' }
        ]
    },
    prefixtree: {
        title: 'Prefix Tree (Trie)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert Word' },
            { id: 'search', label: 'Search Word' },
            { id: 'delete', label: 'Delete Word' }
        ]
    },
    trie: {
        title: 'Prefix Tree (Trie)',
        initial: [],
        operations: [
            { id: 'insert', label: 'Insert Word' },
            { id: 'search', label: 'Search Word' },
            { id: 'delete', label: 'Delete Word' }
        ]
    },
    suffixtree: {
        title: 'Suffix Tree',
        initial: [],
        operations: [
            { id: 'insert', label: 'Build Suffix Tree' },
            { id: 'search', label: 'Search Substring' }
        ]
    },
    // Graph Traversals
    bfs: {
        title: 'Breadth-First Search (BFS)',
        initial: { nodes: [1, 2, 3, 4, 5, 6], edges: [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6]] },
        operations: [
            { id: 'bfs', label: 'Run BFS Traversal' }
        ]
    },
    dfs: {
        title: 'Depth-First Search (DFS)',
        initial: { nodes: [1, 2, 3, 4, 5, 6], edges: [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6]] },
        operations: [
            { id: 'dfs', label: 'Run DFS Traversal' }
        ]
    },
    // MST
    prims: {
        title: "Prim's Minimum Spanning Tree",
        initial: { nodes: [1, 2, 3, 4, 5], edges: [[1, 2], [1, 3], [2, 3], [2, 4], [3, 4], [4, 5], [3, 5]], weights: { '1-2': 2, '1-3': 3, '2-3': 1, '2-4': 4, '3-4': 5, '4-5': 7, '3-5': 6 } },
        operations: [
            { id: 'prims', label: "Run Prim's MST" }
        ]
    },
    kruskals: {
        title: "Kruskal's Minimum Spanning Tree",
        initial: { nodes: [1, 2, 3, 4, 5], edges: [[1, 2], [1, 3], [2, 3], [2, 4], [3, 4], [4, 5], [3, 5]], weights: { '1-2': 2, '1-3': 3, '2-3': 1, '2-4': 4, '3-4': 5, '4-5': 7, '3-5': 6 } },
        operations: [
            { id: 'kruskals', label: "Run Kruskal's MST" }
        ]
    },
    // Shortest Path
    dijkstra: {
        title: "Dijkstra's Shortest Path Algorithm",
        initial: { nodes: [1, 2, 3, 4, 5], edges: [[1, 2], [1, 3], [2, 4], [3, 4], [4, 5]], weights: { '1-2': 4, '1-3': 2, '2-4': 5, '3-4': 1, '4-5': 3 } },
        operations: [
            { id: 'dijkstra', label: 'Run Dijkstra Shortest Path' }
        ]
    },
    bellmanford: {
        title: 'Bellman-Ford Shortest Path',
        initial: { nodes: [1, 2, 3, 4, 5], edges: [[1, 2], [1, 3], [2, 4], [3, 4], [4, 5]], weights: { '1-2': 4, '1-3': -2, '2-4': 5, '3-4': 3, '4-5': -1 } },
        operations: [
            { id: 'bellmanford', label: 'Run Bellman-Ford (V-1 Passes)' }
        ]
    },
    floydwarshall: {
        title: 'Floyd-Warshall All-Pairs Shortest Path',
        initial: { nodes: [1, 2, 3, 4], edges: [[1, 2], [2, 3], [3, 4], [1, 4]], weights: { '1-2': 3, '2-3': 1, '3-4': 2, '1-4': 7 } },
        operations: [
            { id: 'floydwarshall', label: 'Compute Distance Matrix' }
        ]
    },
    astar: {
        title: 'A* Search Algorithm (Heuristic Pathfinding)',
        initial: { nodes: [1, 2, 3, 4, 5], edges: [[1, 2], [1, 3], [2, 4], [3, 4], [4, 5]], weights: { '1-2': 3, '1-3': 2, '2-4': 4, '3-4': 2, '4-5': 3 } },
        operations: [
            { id: 'astar', label: 'Run A* Search f(n) = g(n) + h(n)' }
        ]
    },
    // Other Graph
    cycledetection: {
        title: 'Cycle Detection (DFS Back-Edge Analysis)',
        initial: { nodes: [1, 2, 3, 4], edges: [[1, 2], [2, 3], [3, 4], [4, 2]] },
        operations: [
            { id: 'cycledetection', label: 'Detect Graph Cycles' }
        ]
    },
    topologicalsort: {
        title: "Topological Sorting (Kahn's In-Degree Queue)",
        initial: { nodes: [1, 2, 3, 4, 5, 6], edges: [[1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6]] },
        operations: [
            { id: 'topologicalsort', label: 'Run Topological Sort' }
        ]
    },
    connectedcomponents: {
        title: 'Connected Components Discovery',
        initial: { nodes: [1, 2, 3, 4, 5, 6], edges: [[1, 2], [2, 3], [4, 5]] },
        operations: [
            { id: 'connectedcomponents', label: 'Find Connected Components' }
        ]
    },
    // Search Algorithms
    search: {
        title: 'Search',
        initial: [5, 8, 12, 19, 25, 33, 42, 50],
        operations: [
            { id: 'linearsearch', label: 'Linear Search' },
            { id: 'binarysearch', label: 'Binary Search' }
        ]
    },
    linearsearch: {
        title: 'Linear Search',
        initial: [14, 25, 8, 42, 19, 33, 50, 61],
        operations: [
            { id: 'linearsearch', label: 'Run Linear Search' }
        ]
    },
    binarysearch: {
        title: 'Binary Search',
        initial: [5, 8, 12, 19, 25, 33, 42, 50],
        operations: [
            { id: 'binarysearch', label: 'Run Binary Search' }
        ]
    },
    // Sorting Algorithms
    sorting: {
        title: 'Sorting',
        initial: [64, 34, 25, 12, 22, 11, 90],
        operations: [
            { id: 'bubblesort', label: 'Bubble Sort' },
            { id: 'selectionsort', label: 'Selection Sort' },
            { id: 'insertionsort', label: 'Insertion Sort' },
            { id: 'quicksort', label: 'Quick Sort' },
            { id: 'mergesort', label: 'Merge Sort' }
        ]
    },
    bubblesort: {
        title: 'Bubble Sort',
        initial: [64, 34, 25, 12, 22, 11, 90],
        operations: [
            { id: 'bubblesort', label: 'Run Bubble Sort' }
        ]
    },
    selectionsort: {
        title: 'Selection Sort',
        initial: [64, 34, 25, 12, 22, 11, 90],
        operations: [
            { id: 'selectionsort', label: 'Run Selection Sort' }
        ]
    },
    insertionsort: {
        title: 'Insertion Sort',
        initial: [64, 34, 25, 12, 22, 11, 90],
        operations: [
            { id: 'insertionsort', label: 'Run Insertion Sort' }
        ]
    },
    mergesort: {
        title: 'Merge Sort (Divide & Conquer)',
        initial: [38, 27, 43, 3, 9, 82, 10],
        operations: [
            { id: 'mergesort', label: 'Run Merge Sort' }
        ]
    },
    quicksort: {
        title: 'Quick Sort (Partitioning)',
        initial: [10, 80, 30, 90, 40, 50, 70],
        operations: [
            { id: 'quicksort', label: 'Run Quick Sort' }
        ]
    },
    heapsort: {
        title: 'Heap Sort (Max Heap Extract)',
        initial: [12, 11, 13, 5, 6, 7],
        operations: [
            { id: 'heapsort', label: 'Run Heap Sort' }
        ]
    },
    shellsort: {
        title: 'Shell Sort (Gap Insertion)',
        initial: [35, 33, 42, 10, 14, 19, 27, 44],
        operations: [
            { id: 'shellsort', label: 'Run Shell Sort' }
        ]
    },
    countingsort: {
        title: 'Counting Sort (Frequency Array)',
        initial: [4, 2, 2, 8, 3, 3, 1],
        operations: [
            { id: 'countingsort', label: 'Run Counting Sort' }
        ]
    },
    radixsort: {
        title: 'Radix Sort (LSD Digit Buckets)',
        initial: [170, 45, 75, 90, 802, 24, 2, 66],
        operations: [
            { id: 'radixsort', label: 'Run Radix Sort' }
        ]
    },
    bucketsort: {
        title: 'Bucket Sort (Range Partitioning)',
        initial: [29, 25, 3, 49, 9, 37, 21, 43],
        operations: [
            { id: 'bucketsort', label: 'Run Bucket Sort' }
        ]
    },
    graph: {
        title: 'Graph Algorithms',
        initial: { nodes: [1, 2, 3, 4, 5], edges: [[1, 2], [1, 3], [2, 4], [3, 4], [4, 5]] },
        operations: [
            { id: 'bfs', label: 'BFS Traversal' },
            { id: 'dfs', label: 'DFS Traversal' },
            { id: 'dijkstra', label: "Dijkstra's Path" }
        ]
    },
    graphalgo: {
        title: 'Graph Algorithms',
        initial: { nodes: [1, 2, 3, 4, 5], edges: [[1, 2], [1, 3], [2, 4], [3, 4], [4, 5]] },
        operations: [
            { id: 'prims', label: "Prim's MST" },
            { id: 'kruskals', label: "Kruskal's MST" },
            { id: 'dijkstra', label: 'Dijkstra Shortest Path' }
        ]
    }
};

// DOM Elements
const svg = document.getElementById('viz-svg');
let visualizationBackground = null;
const structureSelect = document.getElementById('structureSelect');
const structurePicker = createMobileStructurePicker(structureSelect);
const operationButtons = document.getElementById('operationButtons');
const valueInput = document.getElementById('valueInput');
const positionInput = document.getElementById('positionInput');
const valuesInput = document.getElementById('valuesInput');
const valuesInputGroup = document.getElementById('valuesInputGroup');
const valuesInputLabel = document.getElementById('valuesInputLabel');
const valuesInputHelp = document.getElementById('valuesInputHelp');
const graphNodesInput = document.getElementById('graphNodesInput');
const graphNodesInputGroup = document.getElementById('graphNodesInputGroup');
const graphEdgesInput = document.getElementById('graphEdgesInput');
const graphEdgesInputGroup = document.getElementById('graphEdgesInputGroup');
const graphEdgesInputHelp = document.getElementById('graphEdgesInputHelp');
const startNodeInput = document.getElementById('startNodeInput');
const startNodeInputGroup = document.getElementById('startNodeInputGroup');
const targetNodeInput = document.getElementById('targetNodeInput');
const targetNodeInputGroup = document.getElementById('targetNodeInputGroup');
const valueInputGroup = document.getElementById('valueInputGroup');
const positionInputGroup = document.getElementById('positionInputGroup');
const statusLabel = document.getElementById('statusLabel');
const pageTitle = document.getElementById('page-title');
const pseudocodeBox = document.getElementById('pseudocodeBox');
const structureNotesLink = document.getElementById('structureNotesLink');
const stepBadge = document.getElementById('stepBadge');
const btnToggleAi = document.getElementById('btnToggleAi');
const stepAiDrawer = document.getElementById('stepAiDrawer');
const aiInsightText = document.getElementById('aiInsightText');

function createMobileStructurePicker(select) {
    if (!select) return null;

    const container = document.createElement('div');
    container.className = 'mobile-structure-picker';

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'mobile-structure-picker-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');

    const menu = document.createElement('div');
    menu.className = 'mobile-structure-picker-menu';
    menu.setAttribute('role', 'listbox');
    menu.setAttribute('aria-label', 'Select a data structure');
    menu.hidden = true;

    function closeMenu(returnFocus = false) {
        menu.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
        if (returnFocus) trigger.focus();
    }

    function createOptionButton(option) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'mobile-structure-picker-option';
        button.setAttribute('role', 'option');
        button.dataset.value = option.value;
        button.textContent = option.textContent;
        button.addEventListener('click', () => {
            select.value = option.value;
            select.dispatchEvent(new Event('change', { bubbles: true }));
            closeMenu(true);
        });
        return button;
    }

    Array.from(select.children).forEach((group) => {
        if (group.tagName === 'OPTGROUP') {
            const heading = document.createElement('div');
            heading.className = 'mobile-structure-picker-group';
            heading.textContent = group.label;
            menu.appendChild(heading);

            Array.from(group.children).forEach((option) => {
                menu.appendChild(createOptionButton(option));
            });
        } else if (group.tagName === 'OPTION') {
            menu.appendChild(createOptionButton(group));
        }
    });

    function syncSelection() {
        const selectedOption = select.selectedOptions[0];
        if (!selectedOption) return;
        trigger.textContent = selectedOption.textContent;
        menu.querySelectorAll('[data-value]').forEach((optionButton) => {
            optionButton.setAttribute(
                'aria-selected',
                String(optionButton.dataset.value === select.value)
            );
        });
    }

    trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        menu.hidden = isExpanded;
        trigger.setAttribute('aria-expanded', String(!isExpanded));
        if (!isExpanded) {
            const selectedButton = menu.querySelector(`[data-value="${CSS.escape(select.value)}"]`);
            selectedButton?.scrollIntoView({ block: 'nearest' });
            selectedButton?.focus();
        }
    });

    trigger.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
    menu.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            closeMenu(true);
            return;
        }

        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            const options = Array.from(menu.querySelectorAll('[data-value]'));
            const currentIndex = options.indexOf(document.activeElement);
            const direction = event.key === 'ArrowDown' ? 1 : -1;
            const nextIndex = (currentIndex + direction + options.length) % options.length;
            options[nextIndex]?.focus();
        }
    });
    document.addEventListener('click', (event) => {
        if (!container.contains(event.target)) closeMenu();
    });

    select.insertAdjacentElement('afterend', container);
    container.append(trigger, menu);
    syncSelection();

    return { syncSelection };
}

// Media Player Controls
const btnPlayPause = document.getElementById('btnPlayPause');
const playIcon = document.getElementById('playIcon');
const playLabel = document.getElementById('playLabel');
const btnStepBack = document.getElementById('btnStepBack');
const btnStepForward = document.getElementById('btnStepForward');
const btnReset = document.getElementById('btnReset');
const btnAutoDemo = document.getElementById('btnAutoDemo');
const timelineScrubber = document.getElementById('timelineScrubber');
const stepCounter = document.getElementById('stepCounter');
const speedSelect = document.getElementById('speedSelect');
const btnNarration = document.getElementById('btnNarration');
const narrationLabel = document.getElementById('narrationLabel');
const narrationStatus = document.getElementById('narrationStatus');

// State Engine
const state = {
    current: 'array',
    data: []
};

const sortingStructures = [
    'sorting', 'bubblesort', 'selectionsort', 'insertionsort', 'mergesort',
    'quicksort', 'heapsort', 'shellsort', 'countingsort', 'radixsort', 'bucketsort'
];
const treeTraversalStructures = ['inorder', 'preorder', 'postorder', 'levelorder'];
const graphStructures = [
    'graph', 'graphalgo', 'bfs', 'dfs', 'prims', 'kruskals', 'dijkstra',
    'bellmanford', 'floydwarshall', 'astar', 'cycledetection',
    'topologicalsort', 'connectedcomponents'
];
const pointToPointStructures = ['dijkstra', 'bellmanford', 'astar'];

function updateAlgorithmInputs() {
    const type = state.current;
    const isSorting = sortingStructures.includes(type);
    const isTreeTraversal = treeTraversalStructures.includes(type);
    const isGraph = graphStructures.includes(type);

    valuesInputGroup.hidden = !isSorting && !isTreeTraversal;
    graphNodesInputGroup.hidden = !isGraph;
    graphEdgesInputGroup.hidden = !isGraph;
    startNodeInputGroup.hidden = !isGraph || !(
        ['graph', 'graphalgo', 'bfs', 'dfs', 'prims', 'dijkstra', 'bellmanford', 'astar'].includes(type)
    );
    targetNodeInputGroup.hidden = !pointToPointStructures.includes(type) && !['graph', 'graphalgo'].includes(type);
    valueInputGroup.hidden = isSorting || isTreeTraversal || isGraph;
    positionInputGroup.hidden = isSorting || isTreeTraversal || isGraph;

    if (isSorting) {
        valuesInputLabel.textContent = 'Array values';
        valuesInputHelp.textContent = 'Enter up to 30 comma-separated integers; these become indices 0, 1, 2, ...';
        if (type === 'radixsort') {
            valuesInputHelp.textContent += ' Radix Sort accepts only non-negative values.';
        } else if (type === 'countingsort') {
            valuesInputHelp.textContent += ' Counting Sort accepts values from 0 to 1,000.';
        }
        valuesInput.value = Array.isArray(state.data) ? state.data.join(', ') : '';
    } else if (isTreeTraversal) {
        valuesInputLabel.textContent = 'Tree values (level order)';
        valuesInputHelp.textContent = 'Enter up to 63 comma-separated integers. Use null for an empty node.';
        valuesInput.value = Array.isArray(state.data) ? state.data.join(', ') : '';
    } else if (isGraph) {
        const initial = structureConfig[type].initial;
        const nodes = initial.nodes || [];
        const weights = initial.weights || {};
        graphNodesInput.readOnly = true;
        graphNodesInput.value = nodes.join(', ');
        graphEdgesInput.value = (initial.edges || []).map(([from, to]) => {
            const weight = weights[`${from}-${to}`] ?? weights[`${to}-${from}`];
            return weight === undefined ? `${from}, ${to}` : `${from}, ${to}, ${weight}`;
        }).join('\n');
        startNodeInput.value = nodes.length ? nodes[0] : '';
        targetNodeInput.value = nodes.length ? nodes[nodes.length - 1] : '';
        graphEdgesInputHelp.textContent = [
            'Use from,to,weight (weight optional).',
            ['graph', 'graphalgo'].includes(type)
                ? 'Direction depends on the selected operation.'
                : ['topologicalsort', 'cycledetection', 'dijkstra', 'bellmanford', 'floydwarshall', 'astar'].includes(type)
                ? 'Edges are directed for this algorithm.'
                : 'Edges are treated as undirected.'
        ].join(' ');
    }
}

function parseIntegerList(input, allowNull = false, maxItems = 30) {
    const entries = input.split(',').map((entry) => entry.trim());
    if (!input.trim() || entries.some((entry) => !entry)) {
        return { values: [], error: 'Enter a comma-separated list of values.' };
    }
    if (entries.length > maxItems) {
        return { values: [], error: `Enter no more than ${maxItems} values.` };
    }

    const values = [];
    for (const entry of entries) {
        if (allowNull && entry.toLowerCase() === 'null') {
            values.push(null);
            continue;
        }
        if (!/^-?\d+$/.test(entry)) {
            return { values: [], error: `“${entry}” is not a valid integer.` };
        }
        const value = Number(entry);
        if (!Number.isSafeInteger(value)) {
            return { values: [], error: `“${entry}” is outside the supported integer range.` };
        }
        values.push(value);
    }
    return { values, error: '' };
}

function readGraphInput(algorithmId = state.current) {
    const parsedNodes = parseIntegerList(graphNodesInput.value, false, 30);
    if (parsedNodes.error) return { error: `Nodes: ${parsedNodes.error}` };

    const nodes = parsedNodes.values;
    if (new Set(nodes).size !== nodes.length) return { error: 'Node values must be unique.' };

    const edges = [];
    const weights = {};
    const edgeKeys = new Set();
    const rows = graphEdgesInput.value.split(/\r?\n/).map((row) => row.trim()).filter(Boolean);
    for (let index = 0; index < rows.length; index += 1) {
        const parts = rows[index].split(',').map((part) => part.trim());
        if (parts.length < 2 || parts.length > 3 || parts.some((part) => !part)) {
            return { error: `Edge row ${index + 1} must be from,to or from,to,weight.` };
        }
        if (!/^-?\d+$/.test(parts[0]) || !/^-?\d+$/.test(parts[1])) {
            return { error: `Edge row ${index + 1} must use integer node values.` };
        }
        const from = Number(parts[0]);
        const to = Number(parts[1]);
        if (!nodes.includes(from) || !nodes.includes(to)) {
            return { error: `Edge row ${index + 1} refers to a node not listed above.` };
        }

        if (parts.length === 3) {
            const weight = Number(parts[2]);
            if (!parts[2] || !Number.isFinite(weight)) {
                return { error: `Edge row ${index + 1} must have a finite numeric weight.` };
            }
            weights[`${from}-${to}`] = weight;
        }
        const key = `${from}-${to}`;
        if (edgeKeys.has(key)) return { error: `Edge ${from},${to} is listed more than once.` };
        edgeKeys.add(key);
        edges.push([from, to]);
    }

    const data = { nodes, edges, weights };
    const start = startNodeInput.value.trim() === '' ? nodes[0] : Number(startNodeInput.value);
    const target = targetNodeInput.value.trim() === '' ? nodes[nodes.length - 1] : Number(targetNodeInput.value);
    if (!Number.isInteger(start) || !nodes.includes(start)) {
        return { error: 'Start node must be one of the listed nodes.' };
    }
    if (pointToPointStructures.includes(algorithmId) && (!Number.isInteger(target) || !nodes.includes(target))) {
        return { error: 'Target node must be one of the listed nodes.' };
    }
    if (['dijkstra', 'astar'].includes(algorithmId) && Object.values(weights).some((weight) => weight < 0)) {
        return { error: `${algorithmId === 'astar' ? 'A*' : "Dijkstra's algorithm"} requires non-negative edge weights; use Bellman-Ford for negative weights.` };
    }
    return { data, start, target, error: '' };
}

// Video Animation Player Engine
const animationPlayer = {
    frames: [],
    currentStepIndex: 0,
    isPlaying: false,
    speed: 1000,
    timerId: null,

    setFrames(frames, autoPlay = true) {
        this.pause();
        this.frames = frames || [];
        this.currentStepIndex = 0;
        timelineScrubber.max = Math.max(0, this.frames.length - 1);
        timelineScrubber.value = 0;
        this.updateStepUI();

        if (this.frames.length > 0) {
            this.renderFrame(0);
            if (autoPlay) {
                this.play();
            }
        }
    },

    play() {
        if (this.frames.length === 0) return;
        if (this.isPlaying) return;
        if (this.currentStepIndex >= this.frames.length - 1) {
            this.currentStepIndex = 0;
            this.renderFrame(0);
        }
        this.isPlaying = true;
        this.updatePlayButton();
        this.narrateCurrentFrameAndSchedule();
    },

    pause() {
        this.isPlaying = false;
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
        narrationControl.stop();
        this.updatePlayButton();
        if (typeof aiInsightManager !== 'undefined') {
            aiInsightManager.onPlaybackPaused();
        }
    },

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },

    scheduleNextFrame() {
        if (!this.isPlaying) return;
        if (this.timerId) clearTimeout(this.timerId);
        const pauseDelay = (narrationControl.isEnabled && narrationControl.isSupported)
            ? Math.min(this.speed, 350)
            : this.speed;

        this.timerId = setTimeout(() => {
            this.timerId = null;
            if (this.currentStepIndex < this.frames.length - 1) {
                this.currentStepIndex++;
                this.renderFrame(this.currentStepIndex);
                this.narrateCurrentFrameAndSchedule();
            } else {
                this.pause();
            }
        }, pauseDelay);
    },

    stepForward() {
        this.pause();
        if (this.currentStepIndex < this.frames.length - 1) {
            this.currentStepIndex++;
            this.renderFrame(this.currentStepIndex);
            this.narrateCurrentFrame();
        }
    },

    stepBackward() {
        this.pause();
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.renderFrame(this.currentStepIndex);
            this.narrateCurrentFrame();
        }
    },

    seekTo(stepIndex) {
        this.pause();
        const index = Math.max(0, Math.min(stepIndex, this.frames.length - 1));
        this.currentStepIndex = index;
        this.renderFrame(index);
        this.narrateCurrentFrame();
    },

    setSpeed(speedMs) {
        this.speed = parseInt(speedMs, 10) || 1000;
        if (this.isPlaying) {
            this.pause();
            this.play();
        }
    },

    reset() {
        this.pause();
        if (this.frames.length > 0) {
            this.currentStepIndex = 0;
            this.renderFrame(0);
            this.narrateCurrentFrame();
        }
    },

    updatePlayButton() {
        if (this.isPlaying) {
            btnPlayPause.classList.add('is-playing');
            playIcon.textContent = '⏸️';
            playLabel.textContent = 'Pause';
        } else {
            btnPlayPause.classList.remove('is-playing');
            playIcon.textContent = '▶️';
            playLabel.textContent = 'Play';
        }
    },

    updateStepUI() {
        const total = this.frames.length;
        const current = total === 0 ? 0 : this.currentStepIndex + 1;
        stepCounter.textContent = `Frame ${current} / ${total}`;
        if (stepBadge) stepBadge.textContent = `Frame ${current} / ${total}`;
        timelineScrubber.value = this.currentStepIndex;
    },

    renderFrame(index) {
        if (index < 0 || index >= this.frames.length) return;
        const frame = this.frames[index];
        this.currentStepIndex = index;
        this.updateStepUI();

        // Update state data to frame snapshot
        if (frame.data !== undefined) {
            state.data = Array.isArray(frame.data)
                ? [...frame.data]
                : JSON.parse(JSON.stringify(frame.data));
        }

        // Update status message
        if (frame.statusMessage) {
            statusLabel.textContent = frame.statusMessage;
        }

        // Update pseudocode panel
        if (frame.pseudocode) {
            renderPseudocode(frame.pseudocode, frame.activeLine);
        } else {
            renderPseudocode(['// Operation execution lines will be highlighted here'], -1);
        }

        // Render visual canvas frame
        renderVisualizationFrame(frame);

        // Update live AI Tutor Insight asynchronously without blocking playback
        aiInsightManager.updateForFrame(frame, index);
    },

    narrationTextForCurrentFrame() {
        const frame = this.frames[this.currentStepIndex];
        if (!frame) return '';
        return frame.narration || frame.statusMessage || `Step ${this.currentStepIndex + 1} of ${this.frames.length}.`;
    },

    narrateCurrentFrame() {
        if (narrationControl.isEnabled && narrationControl.isSupported) {
            narrationControl.setStatus(`Narrating step ${this.currentStepIndex + 1} of ${this.frames.length}.`);
        }
        narrationControl.speak(this.narrationTextForCurrentFrame());
    },

    narrateCurrentFrameAndSchedule() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
        if (narrationControl.isEnabled && narrationControl.isSupported) {
            narrationControl.setStatus(`Narrating step ${this.currentStepIndex + 1} of ${this.frames.length}.`);
        }
        narrationControl.speak(this.narrationTextForCurrentFrame(), () => {
            if (this.isPlaying) this.scheduleNextFrame();
        });
    }
};

// AI Step Explanation Engine (Asynchronous, Non-blocking, Cached)
const aiInsightManager = {
    isEnabled: false,
    cache: new Map(),
    currentRequestId: 0,
    debounceTimer: null,

    init() {
        if (btnToggleAi) {
            btnToggleAi.addEventListener('click', () => {
                this.toggleAi();
            });
        }
        stepAiDrawer?.classList.add('collapsed');
        btnToggleAi?.classList.add('off');
        btnToggleAi?.querySelector('.ai-status-dot')?.classList.remove('active');
    },

    toggleAi() {
        this.isEnabled = !this.isEnabled;
        const dot = btnToggleAi?.querySelector('.ai-status-dot');

        if (!this.isEnabled) {
            stepAiDrawer?.classList.add('collapsed');
            btnToggleAi?.classList.add('off');
            dot?.classList.remove('active');
        } else {
            stepAiDrawer?.classList.remove('collapsed');
            btnToggleAi?.classList.remove('off');
            dot?.classList.add('active');
            if (animationPlayer.isPlaying) {
                this.showPlayingHint(animationPlayer.currentStepIndex);
            } else {
                this.fetchExplanation(false);
            }
        }
    },

    getCacheKey(frame, index) {
        const struct = state.current || 'unknown';
        const context = [
            frame,
            animationPlayer.frames[index - 1],
            animationPlayer.frames[index + 1]
        ].map(item => item ? JSON.stringify({
            status: item.statusMessage || '',
            data: item.data ?? null,
            pointers: item.pointers || {},
            activeLine: item.activeLine
        }) : '');
        return `${struct}::${index}::${context.join('::')}`;
    },

    summarizeFrame(frame) {
        if (!frame) return '';
        const activeCode = frame.pseudocode
            && typeof frame.activeLine === 'number'
            && frame.activeLine >= 0
            ? frame.pseudocode[frame.activeLine] || ''
            : '';
        return JSON.stringify({
            status: frame.statusMessage || '',
            active_code: activeCode,
            data: frame.data ?? null,
            highlights: frame.highlights || [],
            pointers: frame.pointers || {}
        }).slice(0, 1400);
    },

    showPlayingHint(index) {
        aiInsightText.innerHTML = `
            <div class="ai-playing-hint">
                <span class="ai-pulse-dot"></span>
                <span>Animation playing (Step ${index + 1}/${animationPlayer.frames.length}). Pause to get a detailed explanation of this frame.</span>
            </div>
        `;
    },

    updateForFrame(frame, index) {
        if (!this.isEnabled || !aiInsightText || !frame) return;

        if (animationPlayer.isPlaying) {
            this.showPlayingHint(index);
            return;
        }

        const key = this.getCacheKey(frame, index);
        if (this.cache.has(key)) {
            aiInsightText.innerHTML = this.cache.get(key);
            return;
        }

        if (this.debounceTimer) clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.fetchExplanation(false);
        }, 60);
    },

    onPlaybackPaused() {
        if (!this.isEnabled) return;
        const frame = animationPlayer.frames[animationPlayer.currentStepIndex];
        if (frame) {
            const key = this.getCacheKey(frame, animationPlayer.currentStepIndex);
            if (this.cache.has(key)) {
                aiInsightText.innerHTML = this.cache.get(key);
            } else {
                this.fetchExplanation(false);
            }
        }
    },

    async fetchExplanation(isForced = false) {
        if (!this.isEnabled || !aiInsightText) return;

        const frame = animationPlayer.frames[animationPlayer.currentStepIndex];
        if (!frame || !frame.statusMessage) {
            aiInsightText.innerHTML = "Select an operation to view AI step insights.";
            return;
        }

        const index = animationPlayer.currentStepIndex;
        const total = animationPlayer.frames.length;
        const key = this.getCacheKey(frame, index);

        if (!isForced && this.cache.has(key)) {
            aiInsightText.innerHTML = this.cache.get(key);
            return;
        }

        const requestId = ++this.currentRequestId;

        // Subtle loading indicator
        aiInsightText.innerHTML = `
            <div class="ai-loading-shimmer">
                <span class="ai-spinner"></span>
                <span>AI Tutor is analyzing step ${index + 1}...</span>
            </div>
        `;

        try {
            const activeCodeLine = (frame.pseudocode && typeof frame.activeLine === 'number' && frame.activeLine >= 0 && frame.pseudocode[frame.activeLine])
                ? frame.pseudocode[frame.activeLine]
                : '';
            const previousFrame = animationPlayer.frames[index - 1];
            const nextFrame = animationPlayer.frames[index + 1];

            const formData = new URLSearchParams({
                structure: state.current || '',
                operation: frame.operation || '',
                status_message: frame.statusMessage || '',
                active_code: activeCodeLine,
                step_index: String(index + 1),
                total_steps: String(total),
                data_summary: JSON.stringify(frame.data ?? state.data ?? '').slice(0, 1400),
                pointers_summary: JSON.stringify(frame.pointers || {}).slice(0, 500),
                previous_step_summary: this.summarizeFrame(previousFrame),
                next_step_summary: this.summarizeFrame(nextFrame)
            });

            const response = await fetch('/explain-step/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();
            const explanationHtml = data.explanation || frame.statusMessage;

            // Cache the result
            this.cache.set(key, explanationHtml);

            // Verify user is still on the same step
            if (this.currentRequestId === requestId && animationPlayer.currentStepIndex === index) {
                aiInsightText.innerHTML = explanationHtml;
            }
        } catch (err) {
            if (this.currentRequestId === requestId && animationPlayer.currentStepIndex === index) {
                aiInsightText.innerHTML = `<strong>Step ${index + 1}:</strong> ${escapeHtml(frame.statusMessage)}`;
            }
        }
    }
};

function normalizeStructure(value) {
    const val = (value || 'array').toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
    if (val === 'linkedlist') return 'singlylinkedlist';
    if (val === 'queue') return 'simplequeue';
    if (val === 'trie') return 'prefixtree';
    if (val === 'heap' || val === 'binaryheap') return 'maxheap';
    if (val === 'hashing') return 'hashtable';
    if (val === 'linear') return 'linearsearch';
    if (val === 'binary') return 'binarysearch';
    if (val === 'bubble') return 'bubblesort';
    if (val === 'selection') return 'selectionsort';
    if (val === 'insertion') return 'insertionsort';
    if (val === 'merge') return 'mergesort';
    if (val === 'quick') return 'quicksort';
    if (val === 'shell') return 'shellsort';
    if (val === 'counting') return 'countingsort';
    if (val === 'radix') return 'radixsort';
    if (val === 'bucket') return 'bucketsort';
    return val;
}

function titleCase(value) {
    const val = normalizeStructure(value);
    if (val === 'singlylinkedlist' || val === 'linkedlist') return 'Singly Linked List';
    if (val === 'doublylinkedlist') return 'Doubly Linked List';
    if (val === 'circularlinkedlist') return 'Circular Linked List';
    if (val === 'simplequeue' || val === 'queue') return 'Simple Queue';
    if (val === 'circularqueue') return 'Circular Queue';
    if (val === 'priorityqueue') return 'Priority Queue';
    if (val === 'deque') return 'Deque (Double-Ended Queue)';
    if (val === 'hashtable') return 'Hash Table (Chaining / Buckets)';
    if (val === 'maxheap') return 'Max Heap (Binary)';
    if (val === 'minheap') return 'Min Heap (Binary)';
    if (val === 'binomialheap') return 'Binomial Heap (Forest)';
    if (val === 'fibonacciheap') return 'Fibonacci Heap (Doubly Linked Roots)';
    if (val === 'binarytree') return 'Binary Tree';
    if (val === 'bst') return 'Binary Search Tree (BST)';
    if (val === 'avltree') return 'AVL Tree (Self-Balancing)';
    if (val === 'redblacktree') return 'Red-Black Tree';
    if (val === 'btree') return 'B-Tree (Multiway Tree)';
    if (val === 'bplustree') return 'B+ Tree (Index & Leaf Link)';
    if (val === 'prefixtree' || val === 'trie') return 'Prefix Tree (Trie)';
    if (val === 'suffixtree') return 'Suffix Tree';
    if (val === 'inorder') return 'Inorder Traversal';
    if (val === 'preorder') return 'Preorder Traversal';
    if (val === 'postorder') return 'Postorder Traversal';
    if (val === 'levelorder') return 'Level Order Traversal (BFS)';
    if (val === 'bfs') return 'Breadth-First Search (BFS)';
    if (val === 'dfs') return 'Depth-First Search (DFS)';
    if (val === 'prims') return "Prim's Minimum Spanning Tree";
    if (val === 'kruskals') return "Kruskal's Minimum Spanning Tree";
    if (val === 'dijkstra') return "Dijkstra's Shortest Path";
    if (val === 'bellmanford') return 'Bellman-Ford Algorithm';
    if (val === 'floydwarshall') return 'Floyd-Warshall Algorithm';
    if (val === 'astar') return 'A* Search Algorithm';
    if (val === 'cycledetection') return 'Cycle Detection (DFS)';
    if (val === 'topologicalsort') return 'Topological Sorting';
    if (val === 'connectedcomponents') return 'Connected Components';
    if (val === 'linearsearch') return 'Linear Search';
    if (val === 'binarysearch') return 'Binary Search';
    if (val === 'bubblesort') return 'Bubble Sort';
    if (val === 'selectionsort') return 'Selection Sort';
    if (val === 'insertionsort') return 'Insertion Sort';
    if (val === 'mergesort') return 'Merge Sort';
    if (val === 'quicksort') return 'Quick Sort';
    if (val === 'heapsort') return 'Heap Sort';
    if (val === 'shellsort') return 'Shell Sort';
    if (val === 'countingsort') return 'Counting Sort';
    if (val === 'radixsort') return 'Radix Sort';
    if (val === 'bucketsort') return 'Bucket Sort';
    if (val === 'graphalgo' || val === 'graph') return 'Graph Algorithms';
    return val.charAt(0).toUpperCase() + val.slice(1);
}

function setStructure(name) {
    const normalized = normalizeStructure(name);
    if (!structureConfig[normalized]) return;

    state.current = normalized;
    const initial = structureConfig[normalized].initial;
    state.data = Array.isArray(initial) ? [...initial] : JSON.parse(JSON.stringify(initial));

    structureSelect.value = normalized;
    structurePicker?.syncSelection();
    updateAlgorithmInputs();
    pageTitle.textContent = `${titleCase(normalized)} Visualizer`;
    if (structureNotesLink) {
        structureNotesLink.href = structureNotesUrls[normalized] || 'https://www.programiz.com/dsa';
        structureNotesLink.textContent = `Click to read ${titleCase(normalized)} Notes`;
        structureNotesLink.setAttribute('aria-label', `Click to read ${titleCase(normalized)} notes on the learning site`);
    }
    updateStatus(`${titleCase(normalized)} initialized. Click "Watch Example Video Demo" to start from empty!`);

    // Render corresponding algorithm pseudocode immediately
    renderPseudocode(getAlgorithmPseudocode(normalized), 0);

    renderOperationButtons();

    // Generate initial Video Demo starting from EMPTY state for the structure
    runAutoDemoVideo(false);
}

function renderOperationButtons() {
    operationButtons.innerHTML = '';
    structureConfig[state.current].operations.forEach((op) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = op.label;
        button.className = 'btn btn-sm btn-outline-dark me-2 mb-2';
        button.addEventListener('click', () => applyOperation(op.id));
        operationButtons.appendChild(button);
    });
}

function getAlgorithmPseudocode(structureType) {
    const type = normalizeStructure(structureType);
    const registry = {
        array: [
            "function insert(array, index, value) {",
            "  for (let i = array.length; i > index; i--) {",
            "    array[i] = array[i - 1]; // Shift elements right",
            "  }",
            "  array[index] = value; // Insert element at index",
            "  return array;",
            "}"
        ],
        stack: [
            "function push(stack, value) {",
            "  top = top + 1;",
            "  stack[top] = value; // Push to top of stack",
            "}",
            "function pop(stack) {",
            "  if (top < 0) return 'Underflow';",
            "  value = stack[top];",
            "  top = top - 1; // Pop from top",
            "  return value;",
            "}"
        ],
        simplequeue: [
            "function enqueue(queue, value) {",
            "  rear = rear + 1;",
            "  queue[rear] = value; // Add to rear",
            "}",
            "function dequeue(queue) {",
            "  if (front > rear) return 'Underflow';",
            "  value = queue[front];",
            "  front = front + 1; // Remove from front",
            "  return value;",
            "}"
        ],
        circularqueue: [
            "function enqueue(value) {",
            "  if ((rear + 1) % MAX === front) return 'Overflow';",
            "  rear = (rear + 1) % MAX; // Circular advance rear",
            "  queue[rear] = value;",
            "}",
            "function dequeue() {",
            "  if (front === -1) return 'Underflow';",
            "  value = queue[front];",
            "  front = (front + 1) % MAX; // Circular advance front",
            "  return value;",
            "}"
        ],
        priorityqueue: [
            "function insert(pq, value, priority) {",
            "  pq.push({ value, priority });",
            "  heapifyUp(pq.length - 1); // Bubble up by priority",
            "}",
            "function extractHighest(pq) {",
            "  swap(pq[0], pq[pq.length - 1]);",
            "  highest = pq.pop();",
            "  heapifyDown(0); // Restore priority order",
            "  return highest;",
            "}"
        ],
        deque: [
            "function addFront(value) {",
            "  front = (front - 1 + MAX) % MAX;",
            "  deque[front] = value; // Insert at head",
            "}",
            "function addRear(value) {",
            "  rear = (rear + 1) % MAX;",
            "  deque[rear] = value; // Insert at tail",
            "}"
        ],
        singlylinkedlist: [
            "function append(head, value) {",
            "  newNode = new Node(value, null);",
            "  if (!head) return newNode;",
            "  curr = head;",
            "  while (curr.next !== null) curr = curr.next;",
            "  curr.next = newNode; // Link new tail node",
            "  return head;",
            "}"
        ],
        doublylinkedlist: [
            "function append(head, value) {",
            "  newNode = new Node(value, prev=null, next=null);",
            "  if (!head) return newNode;",
            "  curr = head;",
            "  while (curr.next !== null) curr = curr.next;",
            "  curr.next = newNode; newNode.prev = curr;",
            "  return head;",
            "}"
        ],
        circularlinkedlist: [
            "function insertCircular(head, value) {",
            "  newNode = new Node(value);",
            "  if (!head) { newNode.next = newNode; return newNode; }",
            "  curr = head;",
            "  while (curr.next !== head) curr = curr.next;",
            "  curr.next = newNode; newNode.next = head;",
            "  return head;",
            "}"
        ],
        binarytree: [
            "function insert(root, value) {",
            "  if (!root) return new TreeNode(value);",
            "  if (!root.left) root.left = new TreeNode(value);",
            "  else if (!root.right) root.right = new TreeNode(value);",
            "  else insert(root.left, value);",
            "  return root;",
            "}"
        ],
        bst: [
            "function insertBST(root, value) {",
            "  if (root === null) return new TreeNode(value);",
            "  if (value < root.val) {",
            "    root.left = insertBST(root.left, value);",
            "  } else {",
            "    root.right = insertBST(root.right, value);",
            "  }",
            "  return root;",
            "}"
        ],
        avltree: [
            "function insertAVL(node, val) {",
            "  if (!node) return new Node(val);",
            "  if (val < node.val) node.left = insertAVL(node.left, val);",
            "  else node.right = insertAVL(node.right, val);",
            "  node.height = 1 + max(height(node.left), height(node.right));",
            "  balance = getBalance(node);",
            "  if (balance > 1 && val < node.left.val) return rotateRight(node);",
            "  if (balance < -1 && val > node.right.val) return rotateLeft(node);",
            "  return node;",
            "}"
        ],
        redblacktree: [
            "function insertRB(root, val) {",
            "  node = bstInsert(root, val); // Insert node as RED",
            "  while (node != root && node.parent.color === RED) {",
            "    if (uncle.color === RED) { recolor(parent, uncle, grandParent); }",
            "    else { rotateAndRecolor(node); }",
            "  }",
            "  root.color = BLACK;",
            "}"
        ],
        btree: [
            "function insertBTree(root, key) {",
            "  if (root.keys.length === 2*T - 1) {",
            "    newRoot = new BTreeNode(false);",
            "    newRoot.children.push(root);",
            "    splitChild(newRoot, 0, root);",
            "    insertNonFull(newRoot, key);",
            "  } else insertNonFull(root, key);",
            "}"
        ],
        bplustree: [
            "function insertBPlus(leaf, key, value) {",
            "  insertIntoLeaf(leaf, key, value);",
            "  if (leaf.keys.length > MAX_KEYS) {",
            "    splitKey = splitLeaf(leaf);",
            "    insertIntoParent(leaf, splitKey);",
            "  }",
            "}"
        ],
        prefixtree: [
            "function insertTrie(root, word) {",
            "  curr = root;",
            "  for (char of word) {",
            "    if (!curr.children[char]) curr.children[char] = new TrieNode();",
            "    curr = curr.children[char];",
            "  }",
            "  curr.isEndOfWord = true;",
            "}"
        ],
        suffixtree: [
            "function buildSuffixTree(text) {",
            "  root = new SuffixTreeNode();",
            "  for (let i = 0; i < text.length; i++) {",
            "    suffix = text.substring(i);",
            "    insertSuffix(root, suffix, i);",
            "  }",
            "  return root;",
            "}"
        ],
        inorder: [
            "function inorderTraversal(node) {",
            "  if (node === null) return;",
            "  inorderTraversal(node.left);  // 1. Visit Left Subtree",
            "  visit(node.val);              // 2. Process Current Node",
            "  inorderTraversal(node.right); // 3. Visit Right Subtree",
            "}"
        ],
        preorder: [
            "function preorderTraversal(node) {",
            "  if (node === null) return;",
            "  visit(node.val);               // 1. Process Current Node first",
            "  preorderTraversal(node.left);  // 2. Visit Left Subtree",
            "  preorderTraversal(node.right); // 3. Visit Right Subtree",
            "}"
        ],
        postorder: [
            "function postorderTraversal(node) {",
            "  if (node === null) return;",
            "  postorderTraversal(node.left);  // 1. Visit Left Subtree",
            "  postorderTraversal(node.right); // 2. Visit Right Subtree",
            "  visit(node.val);               // 3. Process Current Node last",
            "}"
        ],
        levelorder: [
            "function levelOrderBFS(root) {",
            "  if (!root) return;",
            "  queue = [root];",
            "  while (queue.length > 0) {",
            "    curr = queue.shift();",
            "    visit(curr.val); // Process current node",
            "    if (curr.left) queue.push(curr.left);",
            "    if (curr.right) queue.push(curr.right);",
            "  }",
            "}"
        ],
        maxheap: [
            "function heapifyUp(i) {",
            "  parent = Math.floor((i - 1) / 2);",
            "  while (i > 0 && heap[i] > heap[parent]) {",
            "    swap(heap[i], heap[parent]);",
            "    i = parent; parent = Math.floor((i - 1) / 2);",
            "  }",
            "}"
        ],
        minheap: [
            "function heapifyUpMin(i) {",
            "  parent = Math.floor((i - 1) / 2);",
            "  while (i > 0 && heap[i] < heap[parent]) {",
            "    swap(heap[i], heap[parent]);",
            "    i = parent; parent = Math.floor((i - 1) / 2);",
            "  }",
            "}"
        ],
        binomialheap: [
            "function unionBinomialHeaps(H1, H2) {",
            "  H = mergeRootLists(H1, H2);",
            "  for (curr of H.trees) {",
            "    if (curr.degree === next.degree) {",
            "      linkTrees(curr, next); // Link trees of same degree",
            "    }",
            "  }",
            "  return H;",
            "}"
        ],
        fibonacciheap: [
            "function insertFibonacci(heap, val) {",
            "  node = new FibNode(val);",
            "  addToRootList(heap.min, node);",
            "  if (val < heap.min.val) heap.min = node;",
            "  heap.numNodes++;",
            "}"
        ],
        hashtable: [
            "function hash(key, size) {",
            "  return key % size; // Compute bucket index",
            "}",
            "function insert(key, value) {",
            "  idx = hash(key, size);",
            "  bucket[idx].append({ key, value }); // Separate chaining",
            "}"
        ],
        linearsearch: [
            "function linearSearch(arr, target) {",
            "  for (let i = 0; i < arr.length; i++) {",
            "    if (arr[i] === target) return i; // Found",
            "  }",
            "  return -1; // Not found",
            "}"
        ],
        binarysearch: [
            "function binarySearch(arr, target) {",
            "  let low = 0, high = arr.length - 1;",
            "  while (low <= high) {",
            "    let mid = Math.floor((low + high) / 2);",
            "    if (arr[mid] === target) return mid;",
            "    else if (arr[mid] < target) low = mid + 1;",
            "    else high = mid - 1;",
            "  }",
            "  return -1;",
            "}"
        ],
        bubblesort: [
            "function bubbleSort(arr) {",
            "  for (let i = 0; i < arr.length - 1; i++) {",
            "    for (let j = 0; j < arr.length - i - 1; j++) {",
            "      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);",
            "    }",
            "  }",
            "}"
        ],
        selectionsort: [
            "function selectionSort(arr) {",
            "  for (let i = 0; i < arr.length - 1; i++) {",
            "    let minIdx = i;",
            "    for (let j = i + 1; j < arr.length; j++) {",
            "      if (arr[j] < arr[minIdx]) minIdx = j;",
            "    }",
            "    swap(arr, i, minIdx);",
            "  }",
            "}"
        ],
        insertionsort: [
            "function insertionSort(arr) {",
            "  for (let i = 1; i < arr.length; i++) {",
            "    let key = arr[i], j = i - 1;",
            "    while (j >= 0 && arr[j] > key) {",
            "      arr[j + 1] = arr[j]; j--;",
            "    }",
            "    arr[j + 1] = key;",
            "  }",
            "}"
        ],
        mergesort: [
            "function mergeSort(arr, l, r) {",
            "  if (l >= r) return;",
            "  let m = Math.floor((l + r) / 2);",
            "  mergeSort(arr, l, m);",
            "  mergeSort(arr, m + 1, r);",
            "  merge(arr, l, m, r);",
            "}"
        ],
        quicksort: [
            "function quickSort(arr, low, high) {",
            "  if (low < high) {",
            "    let pi = partition(arr, low, high);",
            "    quickSort(arr, low, pi - 1);",
            "    quickSort(arr, pi + 1, high);",
            "  }",
            "}"
        ],
        heapsort: [
            "function heapSort(arr) {",
            "  buildMaxHeap(arr);",
            "  for (let i = arr.length - 1; i > 0; i--) {",
            "    swap(arr, 0, i); // Move root max to end",
            "    heapify(arr, i, 0); // Restore heap property",
            "  }",
            "}"
        ],
        shellsort: [
            "function shellSort(arr) {",
            "  for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {",
            "    for (let i = gap; i < n; i++) {",
            "      let temp = arr[i], j = i;",
            "      while (j >= gap && arr[j - gap] > temp) { arr[j] = arr[j - gap]; j -= gap; }",
            "      arr[j] = temp;",
            "    }",
            "  }",
            "}"
        ],
        countingsort: [
            "function countingSort(arr) {",
            "  count = new Array(MAX + 1).fill(0);",
            "  for (x of arr) count[x]++;",
            "  for (let i = 1; i <= MAX; i++) count[i] += count[i - 1];",
            "  for (let i = arr.length - 1; i >= 0; i--) {",
            "    output[count[arr[i]] - 1] = arr[i]; count[arr[i]]--;",
            "  }",
            "}"
        ],
        radixsort: [
            "function radixSort(arr) {",
            "  maxVal = getMax(arr);",
            "  for (let exp = 1; Math.floor(maxVal / exp) > 0; exp *= 10) {",
            "    countSortByDigit(arr, exp);",
            "  }",
            "}"
        ],
        bucketsort: [
            "function bucketSort(arr, k) {",
            "  buckets = Array.from({ length: k }, () => []);",
            "  for (x of arr) buckets[Math.floor(x * k / MAX)].push(x);",
            "  for (b of buckets) insertionSort(b);",
            "  return buckets.flat();",
            "}"
        ],
        bfs: [
            "function BFS(graph, startNode) {",
            "  visited = new Set([startNode]);",
            "  queue = [startNode];",
            "  while (queue.length > 0) {",
            "    u = queue.shift(); visit(u);",
            "    for (v of graph.adj[u]) {",
            "      if (!visited.has(v)) { visited.add(v); queue.push(v); }",
            "    }",
            "  }",
            "}"
        ],
        dfs: [
            "function DFS(graph, u, visited = new Set()) {",
            "  visited.add(u);",
            "  visit(u); // Explore vertex u",
            "  for (v of graph.adj[u]) {",
            "    if (!visited.has(v)) {",
            "      DFS(graph, v, visited);",
            "    }",
            "  }",
            "}"
        ],
        prims: [
            "function primMST(graph, src) {",
            "  key = Array(V).fill(Infinity); key[src] = 0;",
            "  pq = new MinHeap(); pq.insert({ node: src, key: 0 });",
            "  while (!pq.isEmpty()) {",
            "    u = pq.extractMin().node; inMST[u] = true;",
            "    for ({ v, weight } of graph.adj[u]) {",
            "      if (!inMST[v] && weight < key[v]) {",
            "        key[v] = weight; parent[v] = u; pq.insert({ node: v, key: weight });",
            "      }",
            "    }",
            "  }",
            "}"
        ],
        kruskals: [
            "function kruskalMST(graph) {",
            "  edges = sortEdgesByWeight(graph.edges);",
            "  ds = new DisjointSet(graph.V);",
            "  mst = [];",
            "  for ({ u, v, weight } of edges) {",
            "    if (ds.find(u) !== ds.find(v)) {",
            "      ds.union(u, v);",
            "      mst.push({ u, v, weight });",
            "    }",
            "  }",
            "  return mst;",
            "}"
        ],
        dijkstra: [
            "function dijkstra(graph, source) {",
            "  dist = Array(V).fill(Infinity); dist[source] = 0;",
            "  pq = new PriorityQueue(); pq.enqueue(source, 0);",
            "  while (!pq.isEmpty()) {",
            "    u = pq.dequeue();",
            "    for ({ v, weight } of graph.adj[u]) {",
            "      if (dist[u] + weight < dist[v]) {",
            "        dist[v] = dist[u] + weight; // Relax edge (u, v)",
            "        pq.enqueue(v, dist[v]);",
            "      }",
            "    }",
            "  }",
            "}"
        ],
        bellmanford: [
            "function bellmanFord(graph, source) {",
            "  dist = Array(V).fill(Infinity); dist[source] = 0;",
            "  for (let i = 1; i <= V - 1; i++) {",
            "    for ({ u, v, weight } of graph.edges) {",
            "      if (dist[u] + weight < dist[v]) {",
            "        dist[v] = dist[u] + weight; // Relax edge",
            "      }",
            "    }",
            "  }",
            "}"
        ],
        floydwarshall: [
            "function floydWarshall(matrix) {",
            "  for (let k = 0; k < V; k++) { // Intermediate vertex",
            "    for (let i = 0; i < V; i++) {",
            "      for (let j = 0; j < V; j++) {",
            "        if (dist[i][k] + dist[k][j] < dist[i][j]) {",
            "          dist[i][j] = dist[i][k] + dist[k][j];",
            "        }",
            "      }",
            "    }",
            "  }",
            "}"
        ],
        astar: [
            "function aStarSearch(start, goal) {",
            "  openSet = new PriorityQueue();",
            "  openSet.insert(start, fScore[start]);",
            "  while (!openSet.isEmpty()) {",
            "    curr = openSet.popLowestF();",
            "    if (curr === goal) return reconstructPath(goal);",
            "    for (neighbor of getNeighbors(curr)) {",
            "      tentativeG = gScore[curr] + weight(curr, neighbor);",
            "      if (tentativeG < gScore[neighbor]) {",
            "        gScore[neighbor] = tentativeG;",
            "        fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);",
            "        openSet.insert(neighbor, fScore[neighbor]);",
            "      }",
            "    }",
            "  }",
            "}"
        ],
        cycledetection: [
            "function detectCycleDFS(u, parent, visited) {",
            "  visited[u] = true;",
            "  for (v of adj[u]) {",
            "    if (!visited[v]) {",
            "      if (detectCycleDFS(v, u, visited)) return true;",
            "    } else if (v !== parent) return true; // Back-edge = Cycle!",
            "  }",
            "  return false;",
            "}"
        ],
        topologicalsort: [
            "function topologicalSortKahn(graph) {",
            "  inDegree = computeInDegrees(graph);",
            "  queue = [nodes with inDegree === 0];",
            "  order = [];",
            "  while (queue.length > 0) {",
            "    u = queue.shift(); order.push(u);",
            "    for (v of graph.adj[u]) {",
            "      inDegree[v]--;",
            "      if (inDegree[v] === 0) queue.push(v);",
            "    }",
            "  }",
            "  return order;",
            "}"
        ],
        connectedcomponents: [
            "function findConnectedComponents(graph) {",
            "  visited = Array(V).fill(false); components = [];",
            "  for (let u = 0; u < V; u++) {",
            "    if (!visited[u]) {",
            "      comp = [];",
            "      exploreDFS(graph, u, visited, comp);",
            "      components.push(comp);",
            "    }",
            "  }",
            "  return components;",
            "}"
        ]
    };

    return registry[type] || registry.array;
}

function renderPseudocode(codeLines, activeLineIndex = -1) {
    if (!pseudocodeBox) return;
    if (!codeLines || !codeLines.length) {
        codeLines = getAlgorithmPseudocode(state.current);
    }
    const lines = Array.isArray(codeLines)
        ? codeLines
        : String(codeLines).split('\n');

    const html = lines.map((line, idx) => {
        const isHighlight = idx === activeLineIndex;
        const lineClass = isHighlight ? 'pseudocode-line line-highlight is-active' : 'pseudocode-line';
        return `<div class="${lineClass}"><span class="line-num">${idx + 1}</span><span class="line-text">${escapeHtml(line)}</span></div>`;
    }).join('');

    pseudocodeBox.innerHTML = `<code>${html}</code>`;

    if (activeLineIndex >= 0) {
        const activeElem = pseudocodeBox.querySelector('.line-highlight');
        if (activeElem) {
            const containerTop = pseudocodeBox.scrollTop;
            const containerHeight = pseudocodeBox.clientHeight;
            const elemTop = activeElem.offsetTop - pseudocodeBox.offsetTop;
            const elemHeight = activeElem.clientHeight;

            if (elemTop < containerTop || (elemTop + elemHeight) > (containerTop + containerHeight)) {
                pseudocodeBox.scrollTop = Math.max(0, elemTop - (containerHeight / 2) + (elemHeight / 2));
            }
        }
    }
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function updateStatus(msg) {
    statusLabel.textContent = msg;
}

function formatTextForSpeech(rawText) {
    if (!rawText) return '';
    let text = String(rawText);

    // Remove emojis and decorative symbols
    text = text.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, ' ');
    text = text.replace(/[🎬🔍🔄⚠️❌💡⚡📌🎯🏁▶️⏸️⏭️⏮️✨🔊🔈🔇]/g, ' ');

    // Normalize introductory prefixes
    text = text.replace(/^Video Demo:\s*/i, 'Video demo: ');

    // Normalize common coding expressions and notation for speech
    text = text.replace(/\bpos\s*(\d+)/gi, 'position $1');
    text = text.replace(/\bidx\s*(\d+)/gi, 'index $1');
    text = text.replace(/\bmid\s*\+\s*1\b/gi, 'mid plus 1');
    text = text.replace(/\bmid\s*-\s*1\b/gi, 'mid minus 1');
    text = text.replace(/->|=>/g, ', then ');
    text = text.replace(/!=/g, ' is not equal to ');
    text = text.replace(/==/g, ' equals ');
    text = text.replace(/<=/g, ' is less than or equal to ');
    text = text.replace(/>=/g, ' is greater than or equal to ');
    text = text.replace(/<(?!=)/g, ' is less than ');
    text = text.replace(/(?<!=)>/g, ' is greater than ');
    text = text.replace(/&&/g, ' and ');
    text = text.replace(/\|\|/g, ' or ');

    // Array / Map notation e.g. A[mid], visited[u], dist[v]
    text = text.replace(/([A-Za-z0-9_]+)\[([^\]]+)\]/g, '$1 at index $2');

    // Time/Space Complexity O(1), O(log N), O(N^2), O(V+E), O(N)
    text = text.replace(/O\(([^)]+)\)/g, (match, inner) => {
        let cleaned = inner
            .replace(/\^2/g, ' squared')
            .replace(/\blog\s*N\b/gi, 'log N')
            .replace(/\bV\s*\+\s*E\b/gi, 'V plus E')
            .replace(/\b1\b/, '1')
            .replace(/\bN\b/g, 'N');
        return `O of ${cleaned}`;
    });

    // Subarray ranges like [mid+1...high]
    text = text.replace(/\[\s*([^\]]+?)\s*\.\.\.\s*([^\]]+?)\s*\]/g, 'range from $1 to $2');

    // Array literals e.g. [10, 20, 30] -> 10, 20, 30
    text = text.replace(/\[([0-9,\s\-]+)\]/g, '$1');

    // Graph / math terms
    text = text.replace(/\binf\b/gi, 'infinity');
    text = text.replace(/\bdeg\b/gi, 'degree');

    // Clean whitespace and punctuation
    text = text.replace(/\s+/g, ' ').replace(/\s+([.,;:!?])/g, '$1').trim();

    return text;
}

// Voice narration uses the browser's text-to-speech engine. It is shared by
// the animation player, so every structure and algorithm gets the same
// step-by-step explanation without a server-side audio service.
const narrationControl = {
    isSupported: typeof window !== 'undefined'
        && typeof window.speechSynthesis !== 'undefined'
        && typeof window.SpeechSynthesisUtterance !== 'undefined',
    isEnabled: false,
    speechId: 0,
    currentUtterance: null,
    selectedVoice: null,
    watchdogTimer: null,

    init() {
        if (!this.isSupported) return;
        this.loadVoices();
        if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
            window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
        }
    },

    loadVoices() {
        if (!this.isSupported) return;
        try {
            const voices = window.speechSynthesis.getVoices();
            if (!voices || voices.length === 0) return;

            const preferredVoiceNames = [
                'Google US English',
                'Google UK English Female',
                'Google UK English Male',
                'Microsoft Jenny Online (Natural) - English (United States)',
                'Microsoft Guy Online (Natural) - English (United States)',
                'Microsoft Aria Online (Natural) - English (United States)',
                'Microsoft David - English (United States)',
                'Microsoft Zira - English (United States)',
                'Samantha',
                'Alex',
                'Victoria',
                'Daniel',
                'Karen'
            ];

            let chosen = null;
            for (const name of preferredVoiceNames) {
                chosen = voices.find(v => v.name === name || (v.name && v.name.includes(name)));
                if (chosen) break;
            }

            if (!chosen) {
                chosen = voices.find(v => v.lang && (v.lang.startsWith('en-') || v.lang.startsWith('en_') || v.lang === 'en'));
            }

            if (!chosen && voices.length > 0) {
                chosen = voices[0];
            }

            this.selectedVoice = chosen || null;
        } catch (e) {
            console.warn('Voice loading warning:', e);
        }
    },

    getSpeechRate() {
        const speed = (typeof animationPlayer !== 'undefined' && animationPlayer.speed) ? animationPlayer.speed : 1000;
        if (speed <= 350) return 1.4;
        if (speed <= 650) return 1.2;
        if (speed >= 1800) return 0.95;
        return 1.05;
    },

    setStatus(message) {
        if (narrationStatus) narrationStatus.textContent = message;
    },

    updateButton() {
        if (!btnNarration) return;
        btnNarration.classList.toggle('is-enabled', this.isEnabled);
        btnNarration.setAttribute('aria-pressed', String(this.isEnabled));
        btnNarration.title = this.isEnabled ? 'Turn off voice narration' : 'Turn on voice narration';
        btnNarration.setAttribute('aria-label', btnNarration.title);
        if (narrationLabel) narrationLabel.textContent = this.isEnabled ? 'Narration: On' : 'Narration: Off';
    },

    stop() {
        this.speechId++;
        if (this.watchdogTimer) {
            clearTimeout(this.watchdogTimer);
            this.watchdogTimer = null;
        }
        this.currentUtterance = null;
        if (typeof window !== 'undefined') {
            window._activeUtterance = null;
        }
        if (this.isSupported) {
            try {
                window.speechSynthesis.cancel();
            } catch (e) {
                // Ignore cancel errors
            }
        }
    },

    speak(rawText, onComplete) {
        const text = formatTextForSpeech(rawText);
        if (!this.isEnabled || !this.isSupported || !text) {
            if (onComplete) onComplete();
            return;
        }

        this.stop();
        const speechId = ++this.speechId;
        let isDone = false;

        const finish = () => {
            if (isDone) return;
            isDone = true;
            if (this.watchdogTimer) {
                clearTimeout(this.watchdogTimer);
                this.watchdogTimer = null;
            }
            if (this.speechId === speechId) {
                this.currentUtterance = null;
                if (typeof window !== 'undefined') {
                    window._activeUtterance = null;
                }
            }
            if (onComplete) onComplete();
        };

        try {
            // Resume if in paused state in Chrome
            if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
            }

            const utterance = new window.SpeechSynthesisUtterance(text);
            utterance.lang = (this.selectedVoice && this.selectedVoice.lang) || document.documentElement.lang || 'en-US';
            if (this.selectedVoice) {
                utterance.voice = this.selectedVoice;
            }
            utterance.rate = this.getSpeechRate();
            utterance.pitch = 1.0;
            utterance.volume = 1.0;

            utterance.onend = () => {
                if (this.speechId !== speechId) return;
                finish();
            };

            utterance.onerror = (event) => {
                if (this.speechId !== speechId) return;
                if (!['interrupted', 'canceled'].includes(event.error)) {
                    this.setStatus('Voice narration playback failed. Playback will continue silently.');
                }
                finish();
            };

            this.currentUtterance = utterance;
            if (typeof window !== 'undefined') {
                window._activeUtterance = utterance;
            }

            // Safety watchdog timeout
            const rate = utterance.rate || 1.0;
            const estimatedMs = Math.max(1500, ((text.length / 14) * 1000 / rate) + 2000);
            this.watchdogTimer = setTimeout(() => {
                if (this.speechId === speechId && !isDone) {
                    finish();
                }
            }, estimatedMs);

            window.speechSynthesis.speak(utterance);
        } catch (error) {
            this.setStatus('Voice narration could not be started. Playback will continue silently.');
            finish();
        }
    },

    setEnabled(isEnabled) {
        this.isEnabled = isEnabled;
        this.stop();
        this.updateButton();
        this.setStatus(isEnabled
            ? 'Voice narration is on. Steps will be read aloud during playback.'
            : 'Voice narration is off. Playback will continue silently.');
    }
};

function setupNarrationControls() {
    if (!btnNarration) return;

    narrationControl.init();

    if (!narrationControl.isSupported) {
        narrationControl.isEnabled = false;
        narrationControl.updateButton();
        btnNarration.disabled = true;
        narrationControl.setStatus('Voice narration is not available in this browser.');
        return;
    }

    narrationControl.updateButton();
    btnNarration.addEventListener('click', () => {
        narrationControl.setEnabled(!narrationControl.isEnabled);

        if (narrationControl.isEnabled) {
            if (animationPlayer.isPlaying) {
                animationPlayer.narrateCurrentFrameAndSchedule();
            } else {
                animationPlayer.narrateCurrentFrame();
            }
        } else {
            if (animationPlayer.isPlaying) {
                animationPlayer.scheduleNextFrame();
            }
        }
    });
}

// Visual SVG Rendering
function renderVisualizationFrame(frame) {
    svg.innerHTML = '';
    visualizationBackground = createSvgElement('rect', {
        x: 0,
        y: 0,
        width: 860,
        height: 420,
        rx: 18,
        fill: '#0f172a'
    });
    svg.appendChild(visualizationBackground);

    const highlights = frame.highlights || [];
    const secondaryHighlights = frame.secondaryHighlights || [];
    const pointers = frame.pointers || {};
    const frameData = frame.data || state.data;

    if (state.current === 'array' || state.current === 'sorting' || state.current === 'search') {
        renderArrayFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'stack') {
        renderStackFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'queue' || state.current === 'simplequeue') {
        renderQueueFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'circularqueue') {
        renderCircularQueueFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'priorityqueue') {
        renderPriorityQueueFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'deque') {
        renderDequeFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'linkedlist' || state.current === 'singlylinkedlist') {
        renderLinkedListFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'doublylinkedlist') {
        renderDoublyLinkedListFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'circularlinkedlist') {
        renderCircularLinkedListFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'binarytree') {
        renderTreeFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'bst') {
        renderBSTFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'avltree') {
        renderAVLFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'redblacktree') {
        renderRedBlackFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'btree') {
        renderBTreeFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'bplustree') {
        renderBPlusTreeFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'prefixtree' || state.current === 'trie') {
        renderTrieFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'suffixtree') {
        renderSuffixTreeFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'hashtable') {
        renderHashTableFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'maxheap' || state.current === 'heap') {
        renderHeapFrame(frameData, highlights, secondaryHighlights, pointers, 'max');
    } else if (state.current === 'minheap') {
        renderHeapFrame(frameData, highlights, secondaryHighlights, pointers, 'min');
    } else if (state.current === 'binomialheap') {
        renderBinomialHeapFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'fibonacciheap') {
        renderFibonacciHeapFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (state.current === 'floydwarshall') {
        renderFloydWarshallMatrixFrame(frameData, highlights, secondaryHighlights, pointers);
    } else if (['bfs', 'dfs', 'prims', 'kruskals', 'dijkstra', 'bellmanford', 'astar', 'cycledetection', 'topologicalsort', 'connectedcomponents', 'graph', 'graphalgo'].includes(state.current)) {
        renderGraphFrame(frameData, highlights, secondaryHighlights, pointers, frame.edgeHighlights);
    } else {
        renderArrayFrame(frameData, highlights, secondaryHighlights, pointers);
    }

    updateVisualizationCanvasSize();
}

function updateVisualizationCanvasSize() {
    if (!visualizationBackground) return;

    visualizationBackground.style.display = 'none';
    svg.setAttribute('viewBox', '0 0 860 420');
    svg.style.removeProperty('width');
    svg.style.removeProperty('height');

    const bounds = svg.getBBox();
    const padding = 24;
    const leftEdge = Math.min(0, bounds.x - padding);
    const topEdge = Math.min(0, bounds.y - padding);
    const rightEdge = Math.max(860, bounds.x + bounds.width + padding);
    const bottomEdge = Math.max(420, bounds.y + bounds.height + padding);
    const viewBoxWidth = rightEdge - leftEdge;
    const viewBoxHeight = bottomEdge - topEdge;
    const stage = svg.parentElement;
    const stageStyle = window.getComputedStyle(stage);
    const availableWidth = stage.clientWidth
        - parseFloat(stageStyle.paddingLeft)
        - parseFloat(stageStyle.paddingRight);
    const availableHeight = stage.clientHeight
        - parseFloat(stageStyle.paddingTop)
        - parseFloat(stageStyle.paddingBottom);
    const scaleX = availableWidth / 860;
    const scaleY = availableHeight / 420;
    const hasOverflow = viewBoxWidth > 860 || viewBoxHeight > 420;

    svg.setAttribute('viewBox', `${leftEdge} ${topEdge} ${viewBoxWidth} ${viewBoxHeight}`);
    visualizationBackground.setAttribute('x', String(leftEdge));
    visualizationBackground.setAttribute('y', String(topEdge));
    visualizationBackground.setAttribute('width', String(viewBoxWidth));
    visualizationBackground.setAttribute('height', String(viewBoxHeight));
    visualizationBackground.style.removeProperty('display');
    if (hasOverflow) {
        svg.style.width = `${viewBoxWidth * scaleX}px`;
        svg.style.height = `${viewBoxHeight * scaleY}px`;
    }
}

window.addEventListener('resize', updateVisualizationCanvasSize);

// -------------------------------------------------------------
// SVG RENDERERS FOR EACH STRUCTURE
// -------------------------------------------------------------

function renderArrayFrame(data, highlights, secondaryHighlights, pointers) {
    const arr = Array.isArray(data) ? data : [];

    if (arr.length === 0) {
        const emptyMsg = createSvgElement('text', {
            x: 430,
            y: 210,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '20',
            'font-weight': '600'
        });
        emptyMsg.textContent = '[ Empty Array ]';
        svg.appendChild(emptyMsg);
        return;
    }

    const startX = Math.max(40, 430 - (arr.length * 95) / 2);
    const y = 180;
    const boxWidth = 85;

    arr.forEach((value, index) => {
        const x = startX + index * 95;
        const isHighlight = highlights.includes(index);
        const isSecondary = secondaryHighlights.includes(index);

        let fillColor = '#2563eb';
        if (isHighlight) fillColor = '#f59e0b';
        if (isSecondary) fillColor = '#10b981';

        const rect = createSvgElement('rect', {
            x,
            y,
            width: boxWidth,
            height: 65,
            rx: 12,
            fill: fillColor,
            stroke: isHighlight ? '#fbbf24' : '#1d4ed8',
            strokeWidth: isHighlight ? '3' : '2'
        });

        const text = createSvgElement('text', {
            x: x + boxWidth / 2,
            y: y + 38,
            'text-anchor': 'middle',
            fill: '#ffffff',
            'font-size': '19',
            'font-weight': '700'
        });
        text.textContent = value;

        const idxText = createSvgElement('text', {
            x: x + boxWidth / 2,
            y: y + 88,
            'text-anchor': 'middle',
            fill: '#94a3b8',
            'font-size': '13'
        });
        idxText.textContent = `[${index}]`;

        svg.appendChild(rect);
        svg.appendChild(text);
        svg.appendChild(idxText);
    });

    const pointerGroups = new Map();
    Object.entries(pointers).forEach(([label, idx]) => {
        const isInitialPartitionBoundary = label === 'i' && idx === -1;
        if (typeof idx !== 'number' || (!isInitialPartitionBoundary && (idx < 0 || idx >= arr.length))) return;
        if (!pointerGroups.has(idx)) pointerGroups.set(idx, []);
        pointerGroups.get(idx).push(label);
    });

    pointerGroups.forEach((labels, idx) => {
        const px = idx === -1 ? startX - 20 : startX + idx * 95 + boxWidth / 2;
        labels.forEach((label, row) => {
            const color = ['#38bdf8', '#f472b6', '#fbbf24', '#a78bfa'][row % 4];
            const labelY = y - 28 - row * 23;
            const labelWidth = Math.max(36, label.length * 9 + 12);
            const labelBackground = createSvgElement('rect', {
                x: px - labelWidth / 2,
                y: labelY - 15,
                width: labelWidth,
                height: 20,
                rx: 6,
                fill: '#0f172a',
                stroke: color,
                'stroke-width': '1.5'
            });
            const ptrText = createSvgElement('text', {
                x: px,
                y: labelY,
                'text-anchor': 'middle',
                fill: color,
                'font-size': '12',
                'font-weight': '700'
            });
            ptrText.textContent = label.toUpperCase();
            svg.appendChild(labelBackground);
            svg.appendChild(ptrText);
        });

        const arrow = createSvgElement('line', {
            x1: px,
            y1: y - 6,
            x2: px,
            y2: y - 1,
            stroke: '#38bdf8',
            'stroke-width': '2'
        });
        svg.appendChild(arrow);
    });
}

function renderStackFrame(data, highlights, secondaryHighlights, pointers) {
    const arr = Array.isArray(data) ? data : [];
    const startX = 350;
    const startY = 70;
    const boxHeight = 50;

    // Stack container outline
    const container = createSvgElement('rect', {
        x: startX - 10,
        y: startY - 10,
        width: 170,
        height: Math.max(320, arr.length * 58 + 30),
        rx: 16,
        fill: '#1e293b',
        stroke: '#475569',
        strokeWidth: '2'
    });
    svg.appendChild(container);

    if (arr.length === 0) {
        const emptyMsg = createSvgElement('text', {
            x: startX + 75,
            y: startY + 160,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '16',
            'font-weight': '600'
        });
        emptyMsg.textContent = 'Empty Stack';
        svg.appendChild(emptyMsg);
        return;
    }

    arr.slice().reverse().forEach((value, revIndex) => {
        const index = arr.length - 1 - revIndex;
        const y = startY + 20 + revIndex * 58;
        const isHighlight = highlights.includes(index);

        const box = createSvgElement('rect', {
            x: startX,
            y,
            width: 150,
            height: boxHeight,
            rx: 10,
            fill: isHighlight ? '#f59e0b' : '#6366f1',
            stroke: '#4f46e5',
            strokeWidth: '2'
        });

        const label = createSvgElement('text', {
            x: startX + 75,
            y: y + 32,
            'text-anchor': 'middle',
            fill: '#ffffff',
            'font-size': '18',
            'font-weight': '700'
        });
        label.textContent = value;

        svg.appendChild(box);
        svg.appendChild(label);

        if (index === arr.length - 1) {
            const ptrText = createSvgElement('text', {
                x: startX - 55,
                y: y + 32,
                'text-anchor': 'middle',
                fill: '#ec4899',
                'font-size': '14',
                'font-weight': '700'
            });
            ptrText.textContent = 'TOP ➔';
            svg.appendChild(ptrText);
        }
    });
}

function renderQueueFrame(data, highlights, secondaryHighlights, pointers) {
    const arr = Array.isArray(data) ? data : [];
    const startX = 80;
    const y = 180;
    const boxWidth = 90;

    const pipeline = createSvgElement('rect', {
        x: startX - 15,
        y: y - 15,
        width: Math.max(730, arr.length * 115 + 30),
        height: 95,
        rx: 18,
        fill: '#1e293b',
        stroke: '#475569',
        strokeWidth: '2'
    });
    svg.appendChild(pipeline);

    if (arr.length === 0) {
        const emptyMsg = createSvgElement('text', {
            x: 430,
            y: y + 38,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '18',
            'font-weight': '600'
        });
        emptyMsg.textContent = 'FRONT ➔ [ Empty Simple Queue ] ➔ REAR';
        svg.appendChild(emptyMsg);
        return;
    }

    arr.forEach((value, index) => {
        const x = startX + index * 115;
        const isHighlight = highlights.includes(index);

        const rect = createSvgElement('rect', {
            x,
            y,
            width: boxWidth,
            height: 65,
            rx: 12,
            fill: isHighlight ? '#f59e0b' : '#0d9488',
            stroke: '#0f766e',
            strokeWidth: '2'
        });

        const label = createSvgElement('text', {
            x: x + boxWidth / 2,
            y: y + 38,
            'text-anchor': 'middle',
            fill: '#fff',
            'font-size': '18',
            'font-weight': '700'
        });
        label.textContent = value;

        svg.appendChild(rect);
        svg.appendChild(label);

        if (index === 0) {
            const fText = createSvgElement('text', {
                x: x + boxWidth / 2,
                y: y - 25,
                'text-anchor': 'middle',
                fill: '#14b8a6',
                'font-size': '14',
                'font-weight': '700'
            });
            fText.textContent = 'FRONT ➔';
            svg.appendChild(fText);
        }

        if (index === arr.length - 1) {
            const rText = createSvgElement('text', {
                x: x + boxWidth / 2,
                y: y + 98,
                'text-anchor': 'middle',
                fill: '#f43f5e',
                'font-size': '14',
                'font-weight': '700'
            });
            rText.textContent = '◄ REAR';
            svg.appendChild(rText);
        }
    });
}

function renderCircularQueueFrame(data, highlights, secondaryHighlights, pointers) {
    const arr = Array.isArray(data) ? data : [];
    const maxCapacity = 8;
    const centerX = 430;
    const centerY = 200;
    const radius = 135;

    // Draw circular ring pipeline outline
    const ring = createSvgElement('circle', {
        cx: centerX,
        cy: centerY,
        r: radius,
        fill: 'none',
        stroke: '#f59e0b',
        'stroke-width': '3',
        'stroke-dasharray': '8,6'
    });
    svg.appendChild(ring);

    // Title Badge inside circle
    const badge = createSvgElement('text', {
        x: centerX,
        y: centerY - 15,
        'text-anchor': 'middle',
        fill: '#94a3b8',
        'font-size': '13',
        'font-weight': '700'
    });
    badge.textContent = 'CIRCULAR BUFFER';
    svg.appendChild(badge);

    const capText = createSvgElement('text', {
        x: centerX,
        y: centerY + 10,
        'text-anchor': 'middle',
        fill: '#f59e0b',
        'font-size': '12',
        'font-weight': '600'
    });
    capText.textContent = `Capacity: 8 Slots (Wraparound)`;
    svg.appendChild(capText);

    const countText = createSvgElement('text', {
        x: centerX,
        y: centerY + 32,
        'text-anchor': 'middle',
        fill: '#e2e8f0',
        'font-size': '14',
        'font-weight': '700'
    });
    countText.textContent = `Size: ${arr.length} / 8`;
    svg.appendChild(countText);

    // Render 8 circular slots around the ring
    for (let slot = 0; slot < maxCapacity; slot++) {
        const angle = (slot * 2 * Math.PI) / maxCapacity - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        const hasItem = slot < arr.length;
        const value = hasItem ? arr[slot] : '-';
        const isHighlight = highlights.includes(slot);

        // Circular slot node
        const nodeCircle = createSvgElement('circle', {
            cx: x,
            cy: y,
            r: 26,
            fill: isHighlight ? '#f59e0b' : hasItem ? '#0d9488' : '#1e293b',
            stroke: hasItem ? '#0f766e' : '#475569',
            'stroke-width': hasItem ? '2.5' : '1.5'
        });
        svg.appendChild(nodeCircle);

        // Value text
        const valText = createSvgElement('text', {
            x,
            y: y + 5,
            'text-anchor': 'middle',
            fill: hasItem ? '#ffffff' : '#64748b',
            'font-size': '15',
            'font-weight': '700'
        });
        valText.textContent = value;
        svg.appendChild(valText);

        // Slot Index label outside slot
        const labelR = radius + 38;
        const lx = centerX + labelR * Math.cos(angle);
        const ly = centerY + labelR * Math.sin(angle);
        const slotLabel = createSvgElement('text', {
            x: lx,
            y: ly + 4,
            'text-anchor': 'middle',
            fill: '#94a3b8',
            'font-size': '11'
        });
        slotLabel.textContent = `[${slot}]`;
        svg.appendChild(slotLabel);

        // FRONT Pointer
        if (slot === 0 && arr.length > 0) {
            const ptrR = radius - 45;
            const px = centerX + ptrR * Math.cos(angle);
            const py = centerY + ptrR * Math.sin(angle);
            const fText = createSvgElement('text', {
                x: px,
                y: py + 4,
                'text-anchor': 'middle',
                fill: '#14b8a6',
                'font-size': '12',
                'font-weight': '700'
            });
            fText.textContent = 'FRONT ➔';
            svg.appendChild(fText);
        }

        // REAR Pointer
        if (slot === arr.length - 1 && arr.length > 0) {
            const ptrR = radius - 45;
            const px = centerX + ptrR * Math.cos(angle);
            const py = centerY + ptrR * Math.sin(angle);
            const rText = createSvgElement('text', {
                x: px,
                y: py + 4,
                'text-anchor': 'middle',
                fill: '#f43f5e',
                'font-size': '12',
                'font-weight': '700'
            });
            rText.textContent = '◄ REAR';
            svg.appendChild(rText);
        }
    }
}

function renderPriorityQueueFrame(data, highlights, secondaryHighlights, pointers) {
    const arr = Array.isArray(data) ? data : [];
    const startX = 70;
    const y = 180;
    const boxWidth = 110;
    const boxHeight = 70;

    // Background priority lane
    const lane = createSvgElement('rect', {
        x: startX - 15,
        y: y - 25,
        width: 740,
        height: 120,
        rx: 18,
        fill: '#1e293b',
        stroke: '#f59e0b',
        strokeWidth: '2',
        'stroke-dasharray': '6,4'
    });
    svg.appendChild(lane);

    // Lane Header
    const laneTitle = createSvgElement('text', {
        x: startX + 355,
        y: y - 4,
        'text-anchor': 'middle',
        fill: '#f59e0b',
        'font-size': '13',
        'font-weight': '700'
    });
    laneTitle.textContent = 'HIGHEST PRIORITY ➔ ➔ ➔ LOWEST PRIORITY';
    svg.appendChild(laneTitle);

    if (arr.length === 0) {
        const emptyMsg = createSvgElement('text', {
            x: 430,
            y: y + 45,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '18',
            'font-weight': '600'
        });
        emptyMsg.textContent = '[ Empty Priority Queue ]';
        svg.appendChild(emptyMsg);
        return;
    }

    arr.forEach((value, index) => {
        const x = startX + index * 125;
        const isHighlight = highlights.includes(index);
        const isTopPrio = index === 0;

        const rect = createSvgElement('rect', {
            x,
            y: y + 15,
            width: boxWidth,
            height: boxHeight,
            rx: 12,
            fill: isHighlight ? '#f59e0b' : isTopPrio ? '#eab308' : '#6366f1',
            stroke: isTopPrio ? '#fef08a' : '#4f46e5',
            strokeWidth: isTopPrio ? '3' : '2'
        });

        // Priority Badge
        const prioBadge = createSvgElement('text', {
            x: x + boxWidth / 2,
            y: y + 36,
            'text-anchor': 'middle',
            fill: isTopPrio ? '#422006' : '#c7d2fe',
            'font-size': '11',
            'font-weight': '700'
        });
        prioBadge.textContent = `Prio #${index + 1}`;

        // Value text
        const valText = createSvgElement('text', {
            x: x + boxWidth / 2,
            y: y + 60,
            'text-anchor': 'middle',
            fill: isTopPrio ? '#000000' : '#ffffff',
            'font-size': '18',
            'font-weight': '700'
        });
        valText.textContent = value;

        svg.appendChild(rect);
        svg.appendChild(prioBadge);
        svg.appendChild(valText);

        if (isTopPrio) {
            const crown = createSvgElement('text', {
                x: x + boxWidth / 2,
                y: y + 98,
                'text-anchor': 'middle',
                fill: '#eab308',
                'font-size': '12',
                'font-weight': '700'
            });
            crown.textContent = '👑 Highest (Serviced Next)';
            svg.appendChild(crown);
        }
    });
}

function renderDequeFrame(data, highlights, secondaryHighlights, pointers) {
    const arr = Array.isArray(data) ? data : [];
    const startX = 90;
    const y = 180;
    const boxWidth = 90;

    const pipeline = createSvgElement('rect', {
        x: startX - 25,
        y: y - 20,
        width: 700,
        height: 105,
        rx: 18,
        fill: '#0f172a',
        stroke: '#38bdf8',
        strokeWidth: '2'
    });
    svg.appendChild(pipeline);

    // Dual-ended labels
    const frontLabel = createSvgElement('text', {
        x: startX - 20,
        y: y - 30,
        'text-anchor': 'start',
        fill: '#38bdf8',
        'font-size': '13',
        'font-weight': '700'
    });
    frontLabel.textContent = '◄ FRONT (Add / Remove)';
    svg.appendChild(frontLabel);

    const rearLabel = createSvgElement('text', {
        x: startX + 675,
        y: y - 30,
        'text-anchor': 'end',
        fill: '#ec4899',
        'font-size': '13',
        'font-weight': '700'
    });
    rearLabel.textContent = 'REAR (Add / Remove) ►';
    svg.appendChild(rearLabel);

    if (arr.length === 0) {
        const emptyMsg = createSvgElement('text', {
            x: 430,
            y: y + 38,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '18',
            'font-weight': '600'
        });
        emptyMsg.textContent = '◄ FRONT ── [ Empty Deque ] ── REAR ►';
        svg.appendChild(emptyMsg);
        return;
    }

    arr.forEach((value, index) => {
        const x = startX + index * 110;
        const isHighlight = highlights.includes(index);

        const rect = createSvgElement('rect', {
            x,
            y,
            width: boxWidth,
            height: 65,
            rx: 12,
            fill: isHighlight ? '#f59e0b' : '#0284c7',
            stroke: '#0369a1',
            strokeWidth: '2'
        });

        const label = createSvgElement('text', {
            x: x + boxWidth / 2,
            y: y + 38,
            'text-anchor': 'middle',
            fill: '#fff',
            'font-size': '18',
            'font-weight': '700'
        });
        label.textContent = value;

        svg.appendChild(rect);
        svg.appendChild(label);

        if (index === 0) {
            const fText = createSvgElement('text', {
                x: x + boxWidth / 2,
                y: y + 98,
                'text-anchor': 'middle',
                fill: '#38bdf8',
                'font-size': '13',
                'font-weight': '700'
            });
            fText.textContent = '◄ FRONT';
            svg.appendChild(fText);
        }

        if (index === arr.length - 1) {
            const rText = createSvgElement('text', {
                x: x + boxWidth / 2,
                y: y + 98,
                'text-anchor': 'middle',
                fill: '#ec4899',
                'font-size': '13',
                'font-weight': '700'
            });
            rText.textContent = (index === 0 ? ' & REAR ►' : 'REAR ►');
            svg.appendChild(rText);
        }
    });
}

function renderLinkedListFrame(data, highlights, secondaryHighlights, pointers) {
    createSvgMarker();
    const arr = Array.isArray(data) ? data : [];
    const startX = 80;
    const y = 200;
    const gap = 125;
    const nodeWidth = 85;
    const nodeHeight = 55;

    if (arr.length === 0) {
        const emptyMsg = createSvgElement('text', {
            x: 430,
            y,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '20',
            'font-weight': '600'
        });
        emptyMsg.textContent = 'HEAD ➔ NULL (Empty Singly List)';
        svg.appendChild(emptyMsg);
        return;
    }

    arr.forEach((value, index) => {
        const x = startX + index * gap;
        const isHighlight = highlights.includes(index);

        const group = createSvgElement('g', {});

        const rect = createSvgElement('rect', {
            x,
            y: y - nodeHeight / 2,
            width: nodeWidth,
            height: nodeHeight,
            rx: 10,
            fill: isHighlight ? '#f59e0b' : '#10b981',
            stroke: '#047857',
            strokeWidth: '2'
        });
        group.appendChild(rect);

        const div = createSvgElement('line', {
            x1: x + nodeWidth - 25,
            y1: y - nodeHeight / 2,
            x2: x + nodeWidth - 25,
            y2: y + nodeHeight / 2,
            stroke: '#6ee7b7',
            strokeWidth: '1.5'
        });
        group.appendChild(div);

        const valText = createSvgElement('text', {
            x: x + (nodeWidth - 25) / 2,
            y: y + 6,
            'text-anchor': 'middle',
            fill: '#ffffff',
            'font-size': '16',
            'font-weight': '700'
        });
        valText.textContent = value;
        group.appendChild(valText);

        const nLabel = createSvgElement('text', {
            x: x + nodeWidth - 12,
            y: y + 5,
            'text-anchor': 'middle',
            fill: '#d1fae5',
            'font-size': '11',
            'font-weight': '700'
        });
        nLabel.textContent = 'N';
        group.appendChild(nLabel);

        svg.appendChild(group);

        if (index === 0) {
            const hText = createSvgElement('text', {
                x: x + nodeWidth / 2,
                y: y - 38,
                'text-anchor': 'middle',
                fill: '#38bdf8',
                'font-size': '13',
                'font-weight': '700'
            });
            hText.textContent = 'HEAD';
            svg.appendChild(hText);
        }

        if (index < arr.length - 1) {
            const nextX = x + gap;
            const line = createSvgElement('line', {
                x1: x + nodeWidth - 5,
                y1: y,
                x2: nextX + 5,
                y2: y,
                stroke: '#94a3b8',
                'stroke-width': '2',
                'marker-end': 'url(#arrowHead)'
            });
            svg.appendChild(line);
        }
    });

    const lastX = startX + (arr.length - 1) * gap + nodeWidth;
    const rightNullLine = createSvgElement('line', {
        x1: lastX - 5,
        y1: y,
        x2: lastX + 20,
        y2: y,
        stroke: '#94a3b8',
        'stroke-width': '2',
        'marker-end': 'url(#arrowHead)'
    });
    svg.appendChild(rightNullLine);

    const nullRight = createSvgElement('text', {
        x: lastX + 38,
        y: y + 5,
        'text-anchor': 'middle',
        fill: '#94a3b8',
        'font-size': '14',
        'font-weight': '700'
    });
    nullRight.textContent = 'NULL';
    svg.appendChild(nullRight);
}

function renderDoublyLinkedListFrame(data, highlights, secondaryHighlights, pointers) {
    createSvgMarker();
    const arr = Array.isArray(data) ? data : [];
    const startX = 70;
    const y = 200;
    const gap = 135;
    const nodeWidth = 90;
    const nodeHeight = 55;

    if (arr.length === 0) {
        const emptyMsg = createSvgElement('text', {
            x: 430,
            y,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '20',
            'font-weight': '600'
        });
        emptyMsg.textContent = 'NULL ◄─ HEAD ─► NULL (Empty Doubly List)';
        svg.appendChild(emptyMsg);
        return;
    }

    const nullLeft = createSvgElement('text', {
        x: startX - 35,
        y: y + 5,
        'text-anchor': 'middle',
        fill: '#94a3b8',
        'font-size': '14',
        'font-weight': '700'
    });
    nullLeft.textContent = 'NULL';
    svg.appendChild(nullLeft);

    const leftNullLine = createSvgElement('line', {
        x1: startX,
        y1: y,
        x2: startX - 20,
        y2: y,
        stroke: '#94a3b8',
        'stroke-width': '2',
        'marker-end': 'url(#arrowHeadLeft)'
    });
    svg.appendChild(leftNullLine);

    arr.forEach((value, index) => {
        const x = startX + index * gap;
        const isHighlight = highlights.includes(index);

        const group = createSvgElement('g', {});

        const rect = createSvgElement('rect', {
            x,
            y: y - nodeHeight / 2,
            width: nodeWidth,
            height: nodeHeight,
            rx: 10,
            fill: isHighlight ? '#f59e0b' : '#0284c7',
            stroke: '#0369a1',
            strokeWidth: '2'
        });
        group.appendChild(rect);

        const div1 = createSvgElement('line', {
            x1: x + 20,
            y1: y - nodeHeight / 2,
            x2: x + 20,
            y2: y + nodeHeight / 2,
            stroke: '#38bdf8',
            strokeWidth: '1.5'
        });
        const div2 = createSvgElement('line', {
            x1: x + nodeWidth - 20,
            y1: y - nodeHeight / 2,
            x2: x + nodeWidth - 20,
            y2: y + nodeHeight / 2,
            stroke: '#38bdf8',
            strokeWidth: '1.5'
        });
        group.appendChild(div1);
        group.appendChild(div2);

        const pLabel = createSvgElement('text', {
            x: x + 10,
            y: y + 4,
            'text-anchor': 'middle',
            fill: '#e0f2fe',
            'font-size': '10',
            'font-weight': '700'
        });
        pLabel.textContent = 'P';
        group.appendChild(pLabel);

        const valText = createSvgElement('text', {
            x: x + nodeWidth / 2,
            y: y + 6,
            'text-anchor': 'middle',
            fill: '#ffffff',
            'font-size': '16',
            'font-weight': '700'
        });
        valText.textContent = value;
        group.appendChild(valText);

        const nLabel = createSvgElement('text', {
            x: x + nodeWidth - 10,
            y: y + 4,
            'text-anchor': 'middle',
            fill: '#e0f2fe',
            'font-size': '10',
            'font-weight': '700'
        });
        nLabel.textContent = 'N';
        group.appendChild(nLabel);

        svg.appendChild(group);

        if (index === 0) {
            const hText = createSvgElement('text', {
                x: x + nodeWidth / 2,
                y: y - 38,
                'text-anchor': 'middle',
                fill: '#38bdf8',
                'font-size': '13',
                'font-weight': '700'
            });
            hText.textContent = 'HEAD';
            svg.appendChild(hText);
        }

        if (index === arr.length - 1) {
            const tText = createSvgElement('text', {
                x: x + nodeWidth / 2,
                y: y + 48,
                'text-anchor': 'middle',
                fill: '#ec4899',
                'font-size': '13',
                'font-weight': '700'
            });
            tText.textContent = 'TAIL';
            svg.appendChild(tText);
        }

        if (index < arr.length - 1) {
            const nextX = x + gap;

            const forwardLine = createSvgElement('line', {
                x1: x + nodeWidth - 10,
                y1: y - 8,
                x2: nextX + 10,
                y2: y - 8,
                stroke: '#38bdf8',
                'stroke-width': '2',
                'marker-end': 'url(#arrowHead)'
            });
            svg.appendChild(forwardLine);

            const backwardLine = createSvgElement('line', {
                x1: nextX + 10,
                y1: y + 8,
                x2: x + nodeWidth - 10,
                y2: y + 8,
                stroke: '#f43f5e',
                'stroke-width': '2',
                'marker-end': 'url(#arrowHeadLeft)'
            });
            svg.appendChild(backwardLine);
        }
    });

    const lastX = startX + (arr.length - 1) * gap + nodeWidth;
    const rightNullLine = createSvgElement('line', {
        x1: lastX - 10,
        y1: y,
        x2: lastX + 20,
        y2: y,
        stroke: '#94a3b8',
        'stroke-width': '2',
        'marker-end': 'url(#arrowHead)'
    });
    svg.appendChild(rightNullLine);

    const nullRight = createSvgElement('text', {
        x: lastX + 38,
        y: y + 5,
        'text-anchor': 'middle',
        fill: '#94a3b8',
        'font-size': '14',
        'font-weight': '700'
    });
    nullRight.textContent = 'NULL';
    svg.appendChild(nullRight);
}

function renderCircularLinkedListFrame(data, highlights, secondaryHighlights, pointers) {
    createSvgMarker();
    const arr = Array.isArray(data) ? data : [];
    const startX = 80;
    const y = 180;
    const gap = 125;
    const nodeWidth = 85;
    const nodeHeight = 55;

    if (arr.length === 0) {
        const emptyMsg = createSvgElement('text', {
            x: 430,
            y,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '20',
            'font-weight': '600'
        });
        emptyMsg.textContent = 'HEAD ➔ HEAD (Empty Circular List)';
        svg.appendChild(emptyMsg);
        return;
    }

    arr.forEach((value, index) => {
        const x = startX + index * gap;
        const isHighlight = highlights.includes(index);

        const group = createSvgElement('g', {});

        const rect = createSvgElement('rect', {
            x,
            y: y - nodeHeight / 2,
            width: nodeWidth,
            height: nodeHeight,
            rx: 10,
            fill: isHighlight ? '#f59e0b' : '#10b981',
            stroke: '#047857',
            strokeWidth: '2'
        });
        group.appendChild(rect);

        const div = createSvgElement('line', {
            x1: x + nodeWidth - 25,
            y1: y - nodeHeight / 2,
            x2: x + nodeWidth - 25,
            y2: y + nodeHeight / 2,
            stroke: '#6ee7b7',
            strokeWidth: '1.5'
        });
        group.appendChild(div);

        const valText = createSvgElement('text', {
            x: x + (nodeWidth - 25) / 2,
            y: y + 6,
            'text-anchor': 'middle',
            fill: '#ffffff',
            'font-size': '16',
            'font-weight': '700'
        });
        valText.textContent = value;
        group.appendChild(valText);

        const nLabel = createSvgElement('text', {
            x: x + nodeWidth - 12,
            y: y + 5,
            'text-anchor': 'middle',
            fill: '#d1fae5',
            'font-size': '11',
            'font-weight': '700'
        });
        nLabel.textContent = 'N';
        group.appendChild(nLabel);

        svg.appendChild(group);

        if (index === 0) {
            const hText = createSvgElement('text', {
                x: x + nodeWidth / 2,
                y: y - 38,
                'text-anchor': 'middle',
                fill: '#38bdf8',
                'font-size': '13',
                'font-weight': '700'
            });
            hText.textContent = 'HEAD';
            svg.appendChild(hText);
        }

        if (index < arr.length - 1) {
            const nextX = x + gap;
            const line = createSvgElement('line', {
                x1: x + nodeWidth - 5,
                y1: y,
                x2: nextX + 5,
                y2: y,
                stroke: '#94a3b8',
                'stroke-width': '2',
                'marker-end': 'url(#arrowHead)'
            });
            svg.appendChild(line);
        }
    });

    const lastX = startX + (arr.length - 1) * gap + nodeWidth - 12;
    const firstX = startX + (nodeWidth - 25) / 2;
    const loopY = y + 75;

    const pathD = `M ${lastX} ${y + 25} Q ${lastX} ${loopY}, ${(lastX + firstX) / 2} ${loopY} T ${firstX} ${y + 28}`;
    const circularPath = createSvgElement('path', {
        d: pathD,
        fill: 'none',
        stroke: '#f59e0b',
        'stroke-width': '2.5',
        'stroke-dasharray': '6,4',
        'marker-end': 'url(#arrowHead)'
    });
    const loopLabel = createSvgElement('text', {
        x: (lastX + firstX) / 2,
        y: loopY + 22,
        'text-anchor': 'middle',
        fill: '#f59e0b',
        'font-size': '13',
        'font-weight': '700'
    });
    loopLabel.textContent = 'Circular Loop ➔ HEAD';
    svg.appendChild(loopLabel);
}

function renderTreeFrame(data, highlights, secondaryHighlights, pointers) {
    const nodes = Array.isArray(data) ? data : [];
    const startY = 70;
    const levelGap = 75;

    if (nodes.length === 0 || nodes.every((n) => n === null || n === undefined)) {
        const emptyMsg = createSvgElement('text', {
            x: 430,
            y: 210,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '20',
            'font-weight': '600'
        });
        emptyMsg.textContent = 'Root = null (Empty Binary Tree)';
        svg.appendChild(emptyMsg);
        return;
    }

    function drawNode(index, depth, x, span) {
        if (index >= nodes.length || nodes[index] === null || nodes[index] === undefined) return;
        const y = startY + depth * levelGap;
        const radius = 22;
        const isHighlight = highlights.includes(index);
        const isSecondary = secondaryHighlights.includes(index);

        let fillColor = '#2563eb';
        if (isHighlight) fillColor = '#f59e0b';
        if (isSecondary) fillColor = '#10b981';

        const circle = createSvgElement('circle', {
            cx: x,
            cy: y,
            r: radius,
            fill: fillColor,
            stroke: '#1d4ed8',
            'stroke-width': 2
        });

        const label = createSvgElement('text', {
            x,
            y: y + 6,
            'text-anchor': 'middle',
            fill: '#fff',
            'font-size': 14,
            'font-weight': 700
        });
        label.textContent = nodes[index];

        svg.appendChild(circle);
        svg.appendChild(label);

        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < nodes.length && nodes[left] !== null && nodes[left] !== undefined) {
            const childX = x - span / 2;
            const childY = y + levelGap;
            const line = createSvgElement('line', {
                x1: x,
                y1: y + radius,
                x2: childX,
                y2: childY - radius,
                stroke: '#64748b',
                'stroke-width': 2
            });
            svg.appendChild(line);
            drawNode(left, depth + 1, childX, span / 2);
        }

        if (right < nodes.length && nodes[right] !== null && nodes[right] !== undefined) {
            const childX = x + span / 2;
            const childY = y + levelGap;
            const line = createSvgElement('line', {
                x1: x,
                y1: y + radius,
                x2: childX,
                y2: childY - radius,
                stroke: '#64748b',
                'stroke-width': 2
            });
            svg.appendChild(line);
            drawNode(right, depth + 1, childX, span / 2);
        }
    }

    drawNode(0, 0, 430, 200);
}

function renderBSTFrame(data, highlights, secondaryHighlights, pointers) {
    const nodes = Array.isArray(data) && data.length ? data : [50, 30, 70, 20, 40, 60, 80];
    const startY = 75;
    const levelGap = 75;

    const bstBadge = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: '#38bdf8',
        'font-size': '13',
        'font-weight': '700'
    });
    bstBadge.textContent = 'BINARY SEARCH TREE (Left < Root < Right)';
    svg.appendChild(bstBadge);

    function drawBSTNode(index, depth, x, span) {
        if (index >= nodes.length || nodes[index] === null || nodes[index] === undefined) return;
        const y = startY + depth * levelGap;
        const radius = 22;
        const isHighlight = highlights.includes(index);

        const circle = createSvgElement('circle', {
            cx: x,
            cy: y,
            r: radius,
            fill: isHighlight ? '#f59e0b' : '#0284c7',
            stroke: '#0369a1',
            'stroke-width': 2.5
        });

        const label = createSvgElement('text', {
            x,
            y: y + 6,
            'text-anchor': 'middle',
            fill: '#fff',
            'font-size': 14,
            'font-weight': 700
        });
        label.textContent = nodes[index];

        svg.appendChild(circle);
        svg.appendChild(label);

        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < nodes.length && nodes[left] !== null && nodes[left] !== undefined) {
            const childX = x - span / 2;
            const childY = y + levelGap;
            const line = createSvgElement('line', {
                x1: x,
                y1: y + radius,
                x2: childX,
                y2: childY - radius,
                stroke: '#38bdf8',
                'stroke-width': 2
            });
            svg.appendChild(line);
            drawBSTNode(left, depth + 1, childX, span / 2);
        }

        if (right < nodes.length && nodes[right] !== null && nodes[right] !== undefined) {
            const childX = x + span / 2;
            const childY = y + levelGap;
            const line = createSvgElement('line', {
                x1: x,
                y1: y + radius,
                x2: childX,
                y2: childY - radius,
                stroke: '#38bdf8',
                'stroke-width': 2
            });
            svg.appendChild(line);
            drawBSTNode(right, depth + 1, childX, span / 2);
        }
    }

    drawBSTNode(0, 0, 430, 200);
}

function renderAVLFrame(data, highlights, secondaryHighlights, pointers) {
    const nodes = Array.isArray(data) && data.length ? data : [50, 30, 70, 20, 40, 60, 80];
    const balanceFactors = [0, 0, 0, 0, 0, 0, 0];
    const startY = 75;
    const levelGap = 75;

    const avlTitle = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: '#10b981',
        'font-size': '13',
        'font-weight': '700'
    });
    avlTitle.textContent = 'AVL TREE (Self-Balancing | Balance Factor BF = hL - hR)';
    svg.appendChild(avlTitle);

    function drawAVLNode(index, depth, x, span) {
        if (index >= nodes.length || nodes[index] === null || nodes[index] === undefined) return;
        const y = startY + depth * levelGap;
        const radius = 22;
        const isHighlight = highlights.includes(index);

        const circle = createSvgElement('circle', {
            cx: x,
            cy: y,
            r: radius,
            fill: isHighlight ? '#f59e0b' : '#10b981',
            stroke: '#047857',
            'stroke-width': 2.5
        });

        const label = createSvgElement('text', {
            x,
            y: y + 6,
            'text-anchor': 'middle',
            fill: '#fff',
            'font-size': 14,
            'font-weight': 700
        });
        label.textContent = nodes[index];

        // Balance Factor Badge
        const bfText = createSvgElement('text', {
            x,
            y: y - 27,
            'text-anchor': 'middle',
            fill: '#6ee7b7',
            'font-size': '11',
            'font-weight': '700'
        });
        bfText.textContent = `BF:${balanceFactors[index] || 0}`;

        svg.appendChild(circle);
        svg.appendChild(label);
        svg.appendChild(bfText);

        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < nodes.length && nodes[left] !== null && nodes[left] !== undefined) {
            const childX = x - span / 2;
            const childY = y + levelGap;
            const line = createSvgElement('line', {
                x1: x,
                y1: y + radius,
                x2: childX,
                y2: childY - radius,
                stroke: '#10b981',
                'stroke-width': 2
            });
            svg.appendChild(line);
            drawAVLNode(left, depth + 1, childX, span / 2);
        }

        if (right < nodes.length && nodes[right] !== null && nodes[right] !== undefined) {
            const childX = x + span / 2;
            const childY = y + levelGap;
            const line = createSvgElement('line', {
                x1: x,
                y1: y + radius,
                x2: childX,
                y2: childY - radius,
                stroke: '#10b981',
                'stroke-width': 2
            });
            svg.appendChild(line);
            drawAVLNode(right, depth + 1, childX, span / 2);
        }
    }

    drawAVLNode(0, 0, 430, 200);
}

function renderRedBlackFrame(data, highlights, secondaryHighlights, pointers) {
    const nodes = Array.isArray(data) && data.length ? data : [50, 30, 70, 20, 40, 60, 80];
    // Node colors: Root is Black (index 0), children alternate Red/Black
    const colors = ['B', 'R', 'R', 'B', 'B', 'B', 'B'];
    const startY = 82;
    const levelGap = 90;
    const treeGroup = createSvgElement('g', {
        transform: 'translate(-107.5 -21) scale(1.25)'
    });

    const rbTitle = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: '#ef4444',
        'font-size': '13',
        'font-weight': '700'
    });
    rbTitle.textContent = 'RED-BLACK TREE (Root is Black | Red Nodes Cannot Be Adjacent)';
    svg.appendChild(rbTitle);

    function drawRBNode(index, depth, x, span) {
        if (index >= nodes.length || nodes[index] === null || nodes[index] === undefined) return;
        const y = startY + depth * levelGap;
        const radius = 25;
        const isRed = colors[index] === 'R';
        const isHighlight = highlights.includes(index);

        const circle = createSvgElement('circle', {
            cx: x,
            cy: y,
            r: radius,
            fill: isHighlight ? '#f59e0b' : isRed ? '#b91c1c' : '#0f172a',
            stroke: isRed ? '#fca5a5' : '#e2e8f0',
            'stroke-width': isRed ? '3' : '2.5'
        });

        const label = createSvgElement('text', {
            x,
            y: y + 6,
            'text-anchor': 'middle',
            fill: isHighlight ? '#111827' : '#ffffff',
            'font-size': 16,
            'font-weight': 700
        });
        label.textContent = nodes[index];

        const tagText = createSvgElement('text', {
            x,
            y: y + radius + 15,
            'text-anchor': 'middle',
            fill: isRed ? '#fecaca' : '#ffffff',
            'font-size': '13',
            'font-weight': '700'
        });
        tagText.textContent = isRed ? '[RED]' : '[BLACK]';

        treeGroup.appendChild(circle);
        treeGroup.appendChild(label);
        treeGroup.appendChild(tagText);

        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < nodes.length && nodes[left] !== null && nodes[left] !== undefined) {
            const childX = x - span / 2;
            const childY = y + levelGap;
            const line = createSvgElement('line', {
                x1: x,
                y1: y + radius,
                x2: childX,
                y2: childY - radius,
                stroke: '#94a3b8',
                'stroke-width': 2
            });
            treeGroup.appendChild(line);
            drawRBNode(left, depth + 1, childX, span / 2);
        }

        if (right < nodes.length && nodes[right] !== null && nodes[right] !== undefined) {
            const childX = x + span / 2;
            const childY = y + levelGap;
            const line = createSvgElement('line', {
                x1: x,
                y1: y + radius,
                x2: childX,
                y2: childY - radius,
                stroke: '#94a3b8',
                'stroke-width': 2
            });
            treeGroup.appendChild(line);
            drawRBNode(right, depth + 1, childX, span / 2);
        }
    }

    drawRBNode(0, 0, 430, 260);
    svg.appendChild(treeGroup);
}

function renderBTreeFrame(data, highlights, secondaryHighlights, pointers) {
    const title = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: '#f59e0b',
        'font-size': '13',
        'font-weight': '700'
    });
    title.textContent = 'B-TREE (Order-m Multiway Search Tree | Multiple Keys Per Node)';
    svg.appendChild(title);

    // Root multi-key node block
    const rootBlock = [
        { x: 380, y: 70, keys: [20, 50] }
    ];

    // Level 1 child multi-key node blocks
    const childrenBlocks = [
        { x: 180, y: 190, keys: [5, 12] },
        { x: 380, y: 190, keys: [30, 42] },
        { x: 580, y: 190, keys: [60, 75, 90] }
    ];

    function drawMultiKeyNode(block, isRoot = false) {
        const keyWidth = 45;
        const height = 48;
        const totalWidth = block.keys.length * keyWidth;
        const startX = block.x - totalWidth / 2;

        const container = createSvgElement('rect', {
            x: startX,
            y: block.y,
            width: totalWidth,
            height,
            rx: 10,
            fill: isRoot ? '#7c3aed' : '#1e293b',
            stroke: isRoot ? '#a78bfa' : '#64748b',
            strokeWidth: '2'
        });
        svg.appendChild(container);

        block.keys.forEach((key, idx) => {
            const kx = startX + idx * keyWidth;
            if (idx > 0) {
                const div = createSvgElement('line', {
                    x1: kx,
                    y1: block.y,
                    x2: kx,
                    y2: block.y + height,
                    stroke: '#475569',
                    strokeWidth: '1.5'
                });
                svg.appendChild(div);
            }

            const kt = createSvgElement('text', {
                x: kx + keyWidth / 2,
                y: block.y + 29,
                'text-anchor': 'middle',
                fill: '#ffffff',
                'font-size': '15',
                'font-weight': '700'
            });
            kt.textContent = key;
            svg.appendChild(kt);
        });
    }

    drawMultiKeyNode(rootBlock[0], true);

    childrenBlocks.forEach((child, cIdx) => {
        drawMultiKeyNode(child, false);

        // Branching pointer line from Root down to Child block
        const rootX = 380 + (cIdx - 1) * 35;
        const line = createSvgElement('line', {
            x1: rootX,
            y1: 70 + 48,
            x2: child.x,
            y2: child.y - 4,
            stroke: '#a78bfa',
            'stroke-width': '2',
            'marker-end': 'url(#arrowHead)'
        });
        svg.appendChild(line);
    });
}

function renderBPlusTreeFrame(data, highlights, secondaryHighlights, pointers) {
    const title = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: '#ec4899',
        'font-size': '13',
        'font-weight': '700'
    });
    title.textContent = 'B+ TREE (Index Nodes + Sequentially Linked Leaf Nodes)';
    svg.appendChild(title);

    // Root Index Block
    const rootBlock = { x: 430, y: 70, keys: [25, 55], label: 'ROOT INDEX' };

    // Leaf Blocks (Level 1)
    const leaves = [
        { x: 170, y: 200, keys: [5, 12, 18] },
        { x: 430, y: 200, keys: [25, 35, 45] },
        { x: 690, y: 200, keys: [55, 70, 85] }
    ];

    function drawBPlusNode(block, isIndex = false) {
        const keyWidth = 42;
        const height = 46;
        const totalWidth = block.keys.length * keyWidth;
        const startX = block.x - totalWidth / 2;

        const container = createSvgElement('rect', {
            x: startX,
            y: block.y,
            width: totalWidth,
            height,
            rx: 8,
            fill: isIndex ? '#be185d' : '#0284c7',
            stroke: isIndex ? '#f472b6' : '#38bdf8',
            strokeWidth: '2'
        });
        svg.appendChild(container);

        block.keys.forEach((key, idx) => {
            const kx = startX + idx * keyWidth;
            if (idx > 0) {
                const div = createSvgElement('line', {
                    x1: kx,
                    y1: block.y,
                    x2: kx,
                    y2: block.y + height,
                    stroke: '#38bdf8',
                    strokeWidth: '1.5'
                });
                svg.appendChild(div);
            }

            const kt = createSvgElement('text', {
                x: kx + keyWidth / 2,
                y: block.y + 28,
                'text-anchor': 'middle',
                fill: '#ffffff',
                'font-size': '14',
                'font-weight': '700'
            });
            kt.textContent = key;
            svg.appendChild(kt);
        });
    }

    drawBPlusNode(rootBlock, true);

    leaves.forEach((leaf, idx) => {
        drawBPlusNode(leaf, false);

        // Line from Root Index to Leaf
        const rootX = 430 + (idx - 1) * 40;
        const line = createSvgElement('line', {
            x1: rootX,
            y1: 70 + 46,
            x2: leaf.x,
            y2: leaf.y - 4,
            stroke: '#f472b6',
            'stroke-width': '2',
            'marker-end': 'url(#arrowHead)'
        });
        svg.appendChild(line);

        // Horizontal Sequential Link Arrow between Leaf Nodes
        if (idx < leaves.length - 1) {
            const nextLeaf = leaves[idx + 1];
            const linkLine = createSvgElement('line', {
                x1: leaf.x + 65,
                y1: leaf.y + 23,
                x2: nextLeaf.x - 65,
                y2: leaf.y + 23,
                stroke: '#eab308',
                'stroke-width': '2.5',
                'stroke-dasharray': '5,4',
                'marker-end': 'url(#arrowHead)'
            });
            svg.appendChild(linkLine);
        }
    });

    const seqLabel = createSvgElement('text', {
        x: 430,
        y: 285,
        'text-anchor': 'middle',
        fill: '#eab308',
        'font-size': '12',
        'font-weight': '700'
    });
    seqLabel.textContent = '◄── Sequential Leaf Link (Fast Range Scan) ──►';
    svg.appendChild(seqLabel);
}

function renderTrieFrame(data, highlights, secondaryHighlights, pointers) {
    const title = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: '#10b981',
        'font-size': '13',
        'font-weight': '700'
    });
    title.textContent = 'PREFIX TREE / TRIE (Prefix Search | Words: "cat", "car", "do", "dog")';
    svg.appendChild(title);

    // Trie Tree Layout Nodes
    const trieNodes = [
        { id: 'root', label: 'ROOT ""', x: 430, y: 70, isEnd: false },
        { id: 'c', label: 'c', x: 280, y: 150, char: 'c', isEnd: false },
        { id: 'ca', label: 'a', x: 280, y: 230, char: 'a', isEnd: false },
        { id: 'cat', label: 't', x: 220, y: 310, char: 't', isEnd: true },
        { id: 'car', label: 'r', x: 340, y: 310, char: 'r', isEnd: true },
        { id: 'd', label: 'd', x: 580, y: 150, char: 'd', isEnd: false },
        { id: 'do', label: 'o', x: 580, y: 230, char: 'o', isEnd: true },
        { id: 'dog', label: 'g', x: 580, y: 310, char: 'g', isEnd: true }
    ];

    const trieEdges = [
        ['root', 'c', 'c'],
        ['c', 'ca', 'a'],
        ['ca', 'cat', 't'],
        ['ca', 'car', 'r'],
        ['root', 'd', 'd'],
        ['d', 'do', 'o'],
        ['do', 'dog', 'g']
    ];

    const nodeMap = {};
    trieNodes.forEach((n) => { nodeMap[n.id] = n; });

    trieEdges.forEach(([src, dst, char]) => {
        const p1 = nodeMap[src];
        const p2 = nodeMap[dst];

        const line = createSvgElement('line', {
            x1: p1.x,
            y1: p1.y + 20,
            x2: p2.x,
            y2: p2.y - 20,
            stroke: '#64748b',
            'stroke-width': 2
        });
        svg.appendChild(line);

        const edgeText = createSvgElement('text', {
            x: (p1.x + p2.x) / 2 + 10,
            y: (p1.y + p2.y) / 2,
            fill: '#38bdf8',
            'font-size': '13',
            'font-weight': '700'
        });
        edgeText.textContent = char;
        svg.appendChild(edgeText);
    });

    trieNodes.forEach((node) => {
        const circle = createSvgElement('circle', {
            cx: node.x,
            cy: node.y,
            r: node.id === 'root' ? 25 : 20,
            fill: node.isEnd ? '#059669' : '#1e293b',
            stroke: node.isEnd ? '#34d399' : '#64748b',
            'stroke-width': node.isEnd ? 3 : 2
        });
        svg.appendChild(circle);

        const label = createSvgElement('text', {
            x: node.x,
            y: node.y + 5,
            'text-anchor': 'middle',
            fill: '#ffffff',
            'font-size': '13',
            'font-weight': '700'
        });
        label.textContent = node.label;
        svg.appendChild(label);

        if (node.isEnd) {
            const endBadge = createSvgElement('text', {
                x: node.x,
                y: node.y + 36,
                'text-anchor': 'middle',
                fill: '#34d399',
                'font-size': '10',
                'font-weight': '700'
            });
            endBadge.textContent = '★ END';
            svg.appendChild(endBadge);
        }
    });
}

function renderSuffixTreeFrame(data, highlights, secondaryHighlights, pointers) {
    const title = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: '#8b5cf6',
        'font-size': '13',
        'font-weight': '700'
    });
    title.textContent = 'SUFFIX TREE for Text "banana$" (Compress Suffix Substrings)';
    svg.appendChild(title);

    const root = createSvgElement('circle', {
        cx: 430,
        cy: 80,
        r: 22,
        fill: '#4c1d95',
        stroke: '#a78bfa',
        strokeWidth: '2.5'
    });
    svg.appendChild(root);

    const rootLabel = createSvgElement('text', {
        x: 430,
        y: 85,
        'text-anchor': 'middle',
        fill: '#ffffff',
        'font-size': '13',
        'font-weight': '700'
    });
    rootLabel.textContent = 'ROOT';
    svg.appendChild(rootLabel);

    const suffixBranches = [
        { label: 'banana$', x: 120, y: 260, suffixIdx: '[0]' },
        { label: 'a', x: 330, y: 170, subBranches: [
            { label: 'nana$', x: 260, y: 280, suffixIdx: '[1]' },
            { label: 'na$', x: 360, y: 280, suffixIdx: '[3]' },
            { label: '$', x: 440, y: 280, suffixIdx: '[5]' }
        ]},
        { label: 'na', x: 620, y: 170, subBranches: [
            { label: 'na$', x: 560, y: 280, suffixIdx: '[2]' },
            { label: '$', x: 660, y: 280, suffixIdx: '[4]' }
        ]},
        { label: '$', x: 770, y: 260, suffixIdx: '[6]' }
    ];

    // Draw branch banana$
    const line1 = createSvgElement('line', { x1: 430, y1: 102, x2: 120, y2: 240, stroke: '#a78bfa', strokeWidth: 2 });
    svg.appendChild(line1);
    const t1 = createSvgElement('text', { x: 250, y: 165, fill: '#c4b5fd', 'font-size': '12', 'font-weight': '700' });
    t1.textContent = 'banana$';
    svg.appendChild(t1);

    const leaf1 = createSvgElement('rect', { x: 85, y: 240, width: 70, height: 35, rx: 8, fill: '#6d28d9', stroke: '#c4b5fd', strokeWidth: 2 });
    svg.appendChild(leaf1);
    const lt1 = createSvgElement('text', { x: 120, y: 262, 'text-anchor': 'middle', fill: '#fff', 'font-size': '12', 'font-weight': '700' });
    lt1.textContent = 'idx [0]';
    svg.appendChild(lt1);

    // Draw branch a
    const line2 = createSvgElement('line', { x1: 430, y1: 102, x2: 330, y2: 155, stroke: '#a78bfa', strokeWidth: 2 });
    svg.appendChild(line2);
    const t2 = createSvgElement('text', { x: 390, y: 125, fill: '#c4b5fd', 'font-size': '12', 'font-weight': '700' });
    t2.textContent = 'a';
    svg.appendChild(t2);

    const nodeA = createSvgElement('circle', { cx: 330, cy: 155, r: 14, fill: '#4c1d95', stroke: '#a78bfa', strokeWidth: 2 });
    svg.appendChild(nodeA);

    // Sub-branches from 'a'
    const subA = [
        { label: 'nana$', x: 250, idx: '[1]' },
        { label: 'na$', x: 340, idx: '[3]' },
        { label: '$', x: 420, idx: '[5]' }
    ];
    subA.forEach((sb) => {
        const sl = createSvgElement('line', { x1: 330, y1: 169, x2: sb.x, y2: 240, stroke: '#a78bfa', strokeWidth: 1.5 });
        svg.appendChild(sl);
        const st = createSvgElement('text', { x: (330 + sb.x) / 2 - 10, y: (169 + 240) / 2, fill: '#ddd6fe', 'font-size': '11' });
        st.textContent = sb.label;
        svg.appendChild(st);

        const lf = createSvgElement('rect', { x: sb.x - 30, y: 240, width: 60, height: 32, rx: 8, fill: '#6d28d9', stroke: '#c4b5fd', strokeWidth: 1.5 });
        svg.appendChild(lf);
        const lft = createSvgElement('text', { x: sb.x, y: 261, 'text-anchor': 'middle', fill: '#fff', 'font-size': '11', 'font-weight': '700' });
        lft.textContent = sb.idx;
        svg.appendChild(lft);
    });

    // Draw branch na
    const line3 = createSvgElement('line', { x1: 430, y1: 102, x2: 600, y2: 155, stroke: '#a78bfa', strokeWidth: 2 });
    svg.appendChild(line3);
    const t3 = createSvgElement('text', { x: 520, y: 125, fill: '#c4b5fd', 'font-size': '12', 'font-weight': '700' });
    t3.textContent = 'na';
    svg.appendChild(t3);

    const nodeNA = createSvgElement('circle', { cx: 600, cy: 155, r: 14, fill: '#4c1d95', stroke: '#a78bfa', strokeWidth: 2 });
    svg.appendChild(nodeNA);

    const subNA = [
        { label: 'na$', x: 540, idx: '[2]' },
        { label: '$', x: 650, idx: '[4]' }
    ];
    subNA.forEach((sb) => {
        const sl = createSvgElement('line', { x1: 600, y1: 169, x2: sb.x, y2: 240, stroke: '#a78bfa', strokeWidth: 1.5 });
        svg.appendChild(sl);
        const st = createSvgElement('text', { x: (600 + sb.x) / 2, y: (169 + 240) / 2, fill: '#ddd6fe', 'font-size': '11' });
        st.textContent = sb.label;
        svg.appendChild(st);

        const lf = createSvgElement('rect', { x: sb.x - 30, y: 240, width: 60, height: 32, rx: 8, fill: '#6d28d9', stroke: '#c4b5fd', strokeWidth: 1.5 });
        svg.appendChild(lf);
        const lft = createSvgElement('text', { x: sb.x, y: 261, 'text-anchor': 'middle', fill: '#fff', 'font-size': '11', 'font-weight': '700' });
        lft.textContent = sb.idx;
        svg.appendChild(lft);
    });

    // Draw branch $
    const line4 = createSvgElement('line', { x1: 430, y1: 102, x2: 760, y2: 240, stroke: '#a78bfa', strokeWidth: 2 });
    svg.appendChild(line4);
    const t4 = createSvgElement('text', { x: 640, y: 165, fill: '#c4b5fd', 'font-size': '12', 'font-weight': '700' });
    t4.textContent = '$';
    svg.appendChild(t4);

    const leaf4 = createSvgElement('rect', { x: 730, y: 240, width: 60, height: 32, rx: 8, fill: '#6d28d9', stroke: '#c4b5fd', strokeWidth: 1.5 });
    svg.appendChild(leaf4);
    const lt4 = createSvgElement('text', { x: 760, y: 261, 'text-anchor': 'middle', fill: '#fff', 'font-size': '11', 'font-weight': '700' });
    lt4.textContent = '[6]';
    svg.appendChild(lt4);
}

function renderHashTableFrame(data, highlights, secondaryHighlights, pointers) {
    const title = createSvgElement('text', {
        x: 430,
        y: 30,
        'text-anchor': 'middle',
        fill: '#38bdf8',
        'font-size': '14',
        'font-weight': '700'
    });
    title.textContent = 'HASH TABLE (Hash Function h(k) = k mod 7 with Separate Chaining)';
    svg.appendChild(title);

    const buckets = Array.isArray(data) ? data : [[], [], [], [], [], [], []];
    const bucketCount = 7;
    const startY = 60;
    const bucketHeight = 42;

    for (let i = 0; i < bucketCount; i++) {
        const y = startY + i * 46;
        const chain = Array.isArray(buckets[i]) ? buckets[i] : [];

        const isBucketActive = highlights.includes(`b-${i}`);
        const slot = createSvgElement('rect', {
            x: 70,
            y,
            width: 110,
            height: bucketHeight,
            rx: 8,
            fill: isBucketActive ? '#f59e0b' : '#1e293b',
            stroke: isBucketActive ? '#fbbf24' : '#475569',
            strokeWidth: 2
        });
        svg.appendChild(slot);

        const label = createSvgElement('text', {
            x: 125,
            y: y + 26,
            'text-anchor': 'middle',
            fill: '#ffffff',
            'font-size': '13',
            'font-weight': '700'
        });
        label.textContent = `Bucket [${i}]`;
        svg.appendChild(label);

        chain.forEach((keyVal, cIdx) => {
            const cx = 230 + cIdx * 110;
            const line = createSvgElement('line', {
                x1: cIdx === 0 ? 180 : cx - 35,
                y1: y + 21,
                x2: cx - 20,
                y2: y + 21,
                stroke: '#38bdf8',
                strokeWidth: 2
            });
            svg.appendChild(line);

            const arrow = createSvgElement('text', {
                x: cx - 18,
                y: y + 25,
                fill: '#38bdf8',
                'font-size': '13'
            });
            arrow.textContent = '➔';
            svg.appendChild(arrow);

            const isKeyActive = highlights.includes(`k-${i}-${cIdx}`);
            const isKeyFound = secondaryHighlights.includes(`k-${i}-${cIdx}`);

            let kFill = '#2563eb';
            if (isKeyActive) kFill = '#f59e0b';
            if (isKeyFound) kFill = '#10b981';

            const nodeBox = createSvgElement('rect', {
                x: cx - 15,
                y,
                width: 75,
                height: bucketHeight,
                rx: 8,
                fill: kFill,
                stroke: '#1d4ed8',
                strokeWidth: 2
            });
            svg.appendChild(nodeBox);

            const nodeText = createSvgElement('text', {
                x: cx + 22,
                y: y + 26,
                'text-anchor': 'middle',
                fill: '#ffffff',
                'font-size': '13',
                'font-weight': '700'
            });
            nodeText.textContent = keyVal;
            svg.appendChild(nodeText);
        });
    }
}

function renderHeapFrame(data, highlights, secondaryHighlights, pointers, heapType = 'max') {
    const nodes = Array.isArray(data) ? data : [];

    const badge = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: heapType === 'min' ? '#10b981' : '#f59e0b',
        'font-size': '14',
        'font-weight': '700'
    });
    badge.textContent = heapType === 'min' ? 'MIN HEAP (Parent ≤ Children)' : 'MAX HEAP (Parent ≥ Children)';
    svg.appendChild(badge);

    if (nodes.length === 0) {
        const emptyMsg = createSvgElement('text', {
            x: 430,
            y: 210,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '18',
            'font-weight': '600'
        });
        emptyMsg.textContent = `[ Empty ${heapType === 'min' ? 'Min' : 'Max'} Heap ]`;
        svg.appendChild(emptyMsg);
        return;
    }

    const startY = 85;
    const levelGap = 65;

    function drawHeapNode(index, depth, x, span) {
        if (index >= nodes.length || nodes[index] === null || nodes[index] === undefined) return;
        const y = startY + depth * levelGap;
        const radius = 20;
        const isHighlight = highlights.includes(index);
        const isSecondary = secondaryHighlights.includes(index);

        let fillColor = heapType === 'min' ? '#059669' : '#d97706';
        if (isHighlight) fillColor = '#ef4444';
        if (isSecondary) fillColor = '#3b82f6';

        const circle = createSvgElement('circle', {
            cx: x,
            cy: y,
            r: radius,
            fill: fillColor,
            stroke: '#ffffff',
            'stroke-width': 2
        });

        const label = createSvgElement('text', {
            x,
            y: y + 5,
            'text-anchor': 'middle',
            fill: '#fff',
            'font-size': 13,
            'font-weight': 700
        });
        label.textContent = nodes[index];

        const idxTag = createSvgElement('text', {
            x,
            y: y + 33,
            'text-anchor': 'middle',
            fill: '#94a3b8',
            'font-size': 10
        });
        idxTag.textContent = `[${index}]`;

        svg.appendChild(circle);
        svg.appendChild(label);
        svg.appendChild(idxTag);

        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < nodes.length && nodes[left] !== null && nodes[left] !== undefined) {
            const childX = x - span / 2;
            const childY = y + levelGap;
            const line = createSvgElement('line', {
                x1: x,
                y1: y + radius,
                x2: childX,
                y2: childY - radius,
                stroke: '#64748b',
                'stroke-width': 2
            });
            svg.appendChild(line);
            drawHeapNode(left, depth + 1, childX, span / 2);
        }

        if (right < nodes.length && nodes[right] !== null && nodes[right] !== undefined) {
            const childX = x + span / 2;
            const childY = y + levelGap;
            const line = createSvgElement('line', {
                x1: x,
                y1: y + radius,
                x2: childX,
                y2: childY - radius,
                stroke: '#64748b',
                'stroke-width': 2
            });
            svg.appendChild(line);
            drawHeapNode(right, depth + 1, childX, span / 2);
        }
    }

    drawHeapNode(0, 0, 430, 200);

    const arrY = 365;
    const boxW = 45;
    const arrStartX = Math.max(30, 430 - (nodes.length * 50) / 2);

    const arrHeader = createSvgElement('text', {
        x: 430,
        y: arrY - 12,
        'text-anchor': 'middle',
        fill: '#94a3b8',
        'font-size': '11',
        'font-weight': '700'
    });
    arrHeader.textContent = 'ARRAY REPRESENTATION:';
    svg.appendChild(arrHeader);

    nodes.forEach((val, i) => {
        const bx = arrStartX + i * 50;
        const isHighlight = highlights.includes(i);

        const rect = createSvgElement('rect', {
            x: bx,
            y: arrY,
            width: boxW,
            height: 35,
            rx: 6,
            fill: isHighlight ? '#ef4444' : '#1e293b',
            stroke: '#475569',
            strokeWidth: 1.5
        });
        svg.appendChild(rect);

        const txt = createSvgElement('text', {
            x: bx + boxW / 2,
            y: arrY + 22,
            'text-anchor': 'middle',
            fill: '#fff',
            'font-size': 12,
            'font-weight': '700'
        });
        txt.textContent = val;
        svg.appendChild(txt);
    });
}

function renderBinomialHeapFrame(data, highlights, secondaryHighlights, pointers) {
    const title = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: '#a855f7',
        'font-size': '14',
        'font-weight': '700'
    });
    title.textContent = 'BINOMIAL HEAP (Forest of Binomial Trees B₀, B₁, B₂, ...)';
    svg.appendChild(title);

    const trees = Array.isArray(data) && data.length ? data : [
        { degree: 0, val: 12, children: [] },
        { degree: 1, val: 7, children: [{ val: 25 }] },
        { degree: 2, val: 3, children: [{ val: 18, children: [{ val: 30 }] }, { val: 10 }] }
    ];

    let startX = 140;
    trees.forEach((tree, tIdx) => {
        const rootX = startX + tIdx * 240;
        const rootY = 100;

        const degText = createSvgElement('text', {
            x: rootX,
            y: rootY - 30,
            'text-anchor': 'middle',
            fill: '#c084fc',
            'font-size': '13',
            'font-weight': '700'
        });
        degText.textContent = `Tree B${tree.degree || tIdx}`;
        svg.appendChild(degText);

        if (tIdx < trees.length - 1) {
            const rootLink = createSvgElement('line', {
                x1: rootX + 25,
                y1: rootY,
                x2: rootX + 215,
                y2: rootY,
                stroke: '#a855f7',
                strokeWidth: 2,
                'stroke-dasharray': '4,4'
            });
            svg.appendChild(rootLink);
        }

        function drawBinomialNode(node, x, y, level, span) {
            if (!node) return;
            const isHighlight = highlights.includes(node.val);

            const circle = createSvgElement('circle', {
                cx: x,
                cy: y,
                r: 20,
                fill: isHighlight ? '#f59e0b' : '#7e22ce',
                stroke: '#a855f7',
                strokeWidth: 2
            });
            svg.appendChild(circle);

            const txt = createSvgElement('text', {
                x,
                y: y + 5,
                'text-anchor': 'middle',
                fill: '#fff',
                'font-size': '13',
                'font-weight': '700'
            });
            txt.textContent = node.val;
            svg.appendChild(txt);

            if (node.children && node.children.length) {
                node.children.forEach((child, cIdx) => {
                    const childX = x - (node.children.length - 1) * 30 + cIdx * 60;
                    const childY = y + 60;

                    const edge = createSvgElement('line', {
                        x1: x,
                        y1: y + 20,
                        x2: childX,
                        y2: childY - 20,
                        stroke: '#c084fc',
                        strokeWidth: 2
                    });
                    svg.appendChild(edge);

                    drawBinomialNode(child, childX, childY, level + 1, span / 2);
                });
            }
        }

        drawBinomialNode(tree, rootX, rootY, 0, 100);
    });
}

function renderFibonacciHeapFrame(data, highlights, secondaryHighlights, pointers) {
    const title = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: '#ec4899',
        'font-size': '14',
        'font-weight': '700'
    });
    title.textContent = 'FIBONACCI HEAP (Circular Doubly Linked Roots & MIN Pointer)';
    svg.appendChild(title);

    const roots = Array.isArray(data) && data.length ? data : [
        { val: 23, min: false, children: [] },
        { val: 7, min: true, children: [{ val: 18 }, { val: 39, children: [{ val: 52 }] }] },
        { val: 17, min: false, children: [{ val: 30 }] },
        { val: 24, min: false, children: [] }
    ];

    const startX = 140;
    const gap = 180;
    const rootY = 110;

    roots.forEach((root, idx) => {
        const rx = startX + idx * gap;

        if (idx < roots.length - 1) {
            const link = createSvgElement('line', {
                x1: rx + 22,
                y1: rootY,
                x2: rx + gap - 22,
                y2: rootY,
                stroke: '#f472b6',
                strokeWidth: 2.5
            });
            svg.appendChild(link);
            const ptrR = createSvgElement('text', { x: rx + gap / 2, y: rootY - 6, 'text-anchor': 'middle', fill: '#f472b6', 'font-size': '12' });
            ptrR.textContent = '⇄';
            svg.appendChild(ptrR);
        }

        if (root.min || pointers.min === idx) {
            const minPtr = createSvgElement('text', {
                x: rx,
                y: rootY - 32,
                'text-anchor': 'middle',
                fill: '#ef4444',
                'font-size': '13',
                'font-weight': '800'
            });
            minPtr.textContent = 'MIN ➔';
            svg.appendChild(minPtr);
        }

        function drawFibNode(node, x, y) {
            const isHighlight = highlights.includes(node.val);

            const circle = createSvgElement('circle', {
                cx: x,
                cy: y,
                r: 20,
                fill: isHighlight ? '#f59e0b' : (node.min ? '#be185d' : '#831843'),
                stroke: node.min ? '#f472b6' : '#9d174d',
                strokeWidth: 2.5
            });
            svg.appendChild(circle);

            const txt = createSvgElement('text', {
                x,
                y: y + 5,
                'text-anchor': 'middle',
                fill: '#fff',
                'font-size': '13',
                'font-weight': '700'
            });
            txt.textContent = node.val;
            svg.appendChild(txt);

            if (node.marked) {
                const mark = createSvgElement('circle', { cx: x + 14, cy: y - 14, r: 6, fill: '#ef4444' });
                svg.appendChild(mark);
            }

            if (node.children && node.children.length) {
                node.children.forEach((child, cIdx) => {
                    const cx = x - (node.children.length - 1) * 22 + cIdx * 44;
                    const cy = y + 55;
                    const line = createSvgElement('line', { x1: x, y1: y + 20, x2: cx, y2: cy - 20, stroke: '#f472b6', strokeWidth: 2 });
                    svg.appendChild(line);
                    drawFibNode(child, cx, cy);
                });
            }
        }

        drawFibNode(root, rx, rootY);
    });
}

function renderFloydWarshallMatrixFrame(data, highlights, secondaryHighlights, pointers) {
    const title = createSvgElement('text', {
        x: 430,
        y: 35,
        'text-anchor': 'middle',
        fill: '#38bdf8',
        'font-size': '14',
        'font-weight': '700'
    });
    title.textContent = 'FLOYD-WARSHALL 2D DISTANCE MATRIX D[i][j] = min(D[i][j], D[i][k] + D[k][j])';
    svg.appendChild(title);

    const matrix = Array.isArray(data) ? data : [
        [0, 3, '∞', 7],
        ['∞', 0, 1, '∞'],
        ['∞', '∞', 0, 2],
        ['∞', '∞', '∞', 0]
    ];

    const startX = 220;
    const startY = 80;
    const cellSize = 65;

    for (let h = 0; h < 4; h++) {
        const colHeader = createSvgElement('text', {
            x: startX + 65 + h * cellSize + cellSize / 2,
            y: startY + 35,
            'text-anchor': 'middle',
            fill: '#94a3b8',
            'font-size': '14',
            'font-weight': '700'
        });
        colHeader.textContent = `V${h + 1}`;
        svg.appendChild(colHeader);

        const rowHeader = createSvgElement('text', {
            x: startX + 35,
            y: startY + 65 + h * cellSize + cellSize / 2 + 5,
            'text-anchor': 'middle',
            fill: '#94a3b8',
            'font-size': '14',
            'font-weight': '700'
        });
        rowHeader.textContent = `V${h + 1}`;
        svg.appendChild(rowHeader);
    }

    matrix.forEach((row, r) => {
        row.forEach((val, c) => {
            const x = startX + 65 + c * cellSize;
            const y = startY + 65 + r * cellSize;
            const isHighlight = highlights.includes(`${r}-${c}`);

            const box = createSvgElement('rect', {
                x,
                y,
                width: cellSize - 4,
                height: cellSize - 4,
                rx: 10,
                fill: isHighlight ? '#f59e0b' : '#1e293b',
                stroke: isHighlight ? '#fbbf24' : '#334155',
                strokeWidth: 2
            });
            svg.appendChild(box);

            const txt = createSvgElement('text', {
                x: x + (cellSize - 4) / 2,
                y: y + (cellSize - 4) / 2 + 6,
                'text-anchor': 'middle',
                fill: '#ffffff',
                'font-size': '16',
                'font-weight': '700'
            });
            txt.textContent = val;
            svg.appendChild(txt);
        });
    });
}

function renderGraphFrame(data, highlights, secondaryHighlights, pointers, edgeHighlights = []) {
    const graphData = data && data.nodes ? data : { nodes: [], edges: [] };
    const nodes = graphData.nodes || [];
    const edges = graphData.edges || [];
    const weights = graphData.weights || {};

    if (nodes.length === 0) {
        const emptyMsg = createSvgElement('text', {
            x: 430,
            y: 210,
            'text-anchor': 'middle',
            fill: '#64748b',
            'font-size': '20',
            'font-weight': '600'
        });
        emptyMsg.textContent = 'Empty Graph (No Nodes/Edges)';
        svg.appendChild(emptyMsg);
        return;
    }

    const cx = 430;
    const cy = 200;
    const radius = 145;

    const positions = {};
    nodes.forEach((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        positions[n] = { x, y };
    });

    edges.forEach(([a, b]) => {
        const aPos = positions[a];
        const bPos = positions[b];
        if (!aPos || !bPos) return;

        const edgeKey = `${a}-${b}`;
        const revKey = `${b}-${a}`;
        const isEdgeHighlight = edgeHighlights.includes(edgeKey) || edgeHighlights.includes(revKey);

        const line = createSvgElement('line', {
            x1: aPos.x,
            y1: aPos.y,
            x2: bPos.x,
            y2: bPos.y,
            stroke: isEdgeHighlight ? '#f59e0b' : '#64748b',
            'stroke-width': isEdgeHighlight ? '4' : '2'
        });
        svg.appendChild(line);

        const weightVal = weights[edgeKey] ?? weights[revKey];
        if (weightVal !== undefined) {
            const midX = (aPos.x + bPos.x) / 2;
            const midY = (aPos.y + bPos.y) / 2;
            const wLabel = createSvgElement('text', {
                x: midX,
                y: midY - 6,
                'text-anchor': 'middle',
                fill: '#38bdf8',
                'font-size': '13',
                'font-weight': '700'
            });
            wLabel.textContent = weightVal;
            svg.appendChild(wLabel);
        }
    });

    nodes.forEach((n) => {
        const p = positions[n];
        const isHighlight = highlights.includes(n);
        const isSecondary = secondaryHighlights.includes(n);

        let fillColor = '#10b981';
        if (isHighlight) fillColor = '#f59e0b';
        if (isSecondary) fillColor = '#3b82f6';

        const circle = createSvgElement('circle', {
            cx: p.x,
            cy: p.y,
            r: 24,
            fill: fillColor,
            stroke: '#047857',
            'stroke-width': 2
        });

        const label = createSvgElement('text', {
            x: p.x,
            y: p.y + 6,
            'text-anchor': 'middle',
            fill: '#fff',
            'font-size': 15,
            'font-weight': 700
        });
        label.textContent = n;

        svg.appendChild(circle);
        svg.appendChild(label);
    });
}

function createSvgMarker() {
    if (document.getElementById('arrowHead')) return;
    const defs = createSvgElement('defs', {});

    const marker = createSvgElement('marker', {
        id: 'arrowHead',
        markerWidth: '10',
        markerHeight: '10',
        refX: '8',
        refY: '3',
        orient: 'auto',
        markerUnits: 'strokeWidth'
    });
    const path = createSvgElement('path', {
        d: 'M0,0 L0,6 L9,3 z',
        fill: '#94a3b8'
    });
    marker.appendChild(path);
    defs.appendChild(marker);

    const markerLeft = createSvgElement('marker', {
        id: 'arrowHeadLeft',
        markerWidth: '10',
        markerHeight: '10',
        refX: '1',
        refY: '3',
        orient: 'auto',
        markerUnits: 'strokeWidth'
    });
    const pathLeft = createSvgElement('path', {
        d: 'M9,0 L9,6 L0,3 z',
        fill: '#f43f5e'
    });
    markerLeft.appendChild(pathLeft);
    defs.appendChild(markerLeft);

    svg.insertBefore(defs, svg.firstChild);
}

function createSvgElement(tagName, attrs) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', tagName);
    Object.entries(attrs || {}).forEach(([key, value]) => {
        if (value !== undefined) {
            element.setAttribute(key, value);
        }
    });
    return element;
}

// -------------------------------------------------------------
// FRAME GENERATORS FOR ALL OPERATIONS (ANIMATES FROM CURRENT/INPUT STATE)
// -------------------------------------------------------------

function generateArrayFrames(operationId, value, position) {
    const frames = [];
    let arr = Array.isArray(state.data) ? [...state.data] : [];
    const val = value !== '' ? value : 42;
    const pos = parseInt(position, 10);

    if (operationId === 'push') {
        const code = [
            `function push(arr, value) {`,
            `  arr[arr.length] = value; // Append element`,
            `  return arr;`,
            `}`
        ];
        frames.push({
            data: [...arr],
            highlights: [],
            statusMessage: `Preparing to push ${val} into ${titleCase(state.current)}.`,
            pseudocode: code,
            activeLine: 0
        });
        arr.push(val);
        frames.push({
            data: [...arr],
            highlights: [arr.length - 1],
            statusMessage: `Pushed ${val} onto ${titleCase(state.current)} at index ${arr.length - 1}.`,
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data: [...arr],
            highlights: [],
            secondaryHighlights: [arr.length - 1],
            statusMessage: `Push operation complete.`,
            pseudocode: code,
            activeLine: 2
        });
    } else if (operationId === 'pop') {
        const code = [
            `function pop(arr) {`,
            `  const popped = arr[arr.length - 1];`,
            `  arr.length = arr.length - 1;`,
            `  return popped;`,
            `}`
        ];
        if (arr.length === 0) {
            frames.push({ data: [], statusMessage: `${titleCase(state.current)} is empty. Cannot pop.`, pseudocode: code, activeLine: 0 });
        } else {
            frames.push({
                data: [...arr],
                highlights: [arr.length - 1],
                statusMessage: `Identifying element to pop: ${arr[arr.length - 1]}`,
                pseudocode: code,
                activeLine: 1
            });
            const popped = arr.pop();
            frames.push({
                data: [...arr],
                highlights: [],
                statusMessage: `Popped element ${popped}.`,
                pseudocode: code,
                activeLine: 2
            });
        }
    } else if (operationId === 'insert' || operationId === 'append') {
        const code = [
            `function insert(arr, val, idx) {`,
            `  for (let i = arr.length; i > idx; i--) arr[i] = arr[i-1];`,
            `  arr[idx] = val;`,
            `}`
        ];
        const targetIdx = Number.isNaN(pos) ? arr.length : Math.max(0, Math.min(pos, arr.length));
        frames.push({
            data: [...arr],
            highlights: [],
            statusMessage: `Inserting ${val} at position ${targetIdx}.`,
            pseudocode: code,
            activeLine: 0
        });
        arr.splice(targetIdx, 0, val);
        frames.push({
            data: [...arr],
            highlights: [targetIdx],
            statusMessage: `Placed element ${val} at index ${targetIdx}.`,
            pseudocode: code,
            activeLine: 2
        });
    } else if (operationId === 'delete') {
        const code = [
            `function deleteAt(arr, idx) {`,
            `  for (let i = idx; i < arr.length - 1; i++) arr[i] = arr[i+1];`,
            `  arr.length--;`,
            `}`
        ];
        if (arr.length === 0) {
            frames.push({ data: [], statusMessage: `Structure is empty. Cannot delete.`, pseudocode: code, activeLine: 0 });
        } else {
            const targetIdx = Number.isNaN(pos) ? 0 : Math.max(0, Math.min(pos, arr.length - 1));
            frames.push({
                data: [...arr],
                highlights: [targetIdx],
                statusMessage: `Locating element at index ${targetIdx} to delete.`,
                pseudocode: code,
                activeLine: 0
            });
            const removed = arr.splice(targetIdx, 1);
            frames.push({
                data: [...arr],
                highlights: [],
                statusMessage: `Deleted element ${removed} from index ${targetIdx}.`,
                pseudocode: code,
                activeLine: 2
            });
        }
    } else if (operationId === 'addfront' || operationId === 'pushfront') {
        const code = [
            `function addFront(deque, val) {`,
            `  deque.unshift(val); // Insert at Front`,
            `}`
        ];
        frames.push({
            data: [...arr],
            statusMessage: `Adding ${val} to Front of Deque.`,
            pseudocode: code,
            activeLine: 0
        });
        arr.unshift(val);
        frames.push({
            data: [...arr],
            highlights: [0],
            statusMessage: `Added ${val} at Front of Deque.`,
            pseudocode: code,
            activeLine: 1
        });
    } else if (operationId === 'removerear' || operationId === 'poprear') {
        const code = [
            `function removeRear(deque) {`,
            `  return deque.pop(); // Remove from Rear`,
            `}`
        ];
        if (arr.length === 0) {
            frames.push({ data: [], statusMessage: `Deque is empty. Cannot remove from Rear.`, pseudocode: code, activeLine: 0 });
        } else {
            frames.push({
                data: [...arr],
                highlights: [arr.length - 1],
                statusMessage: `Identifying REAR element ${arr[arr.length - 1]} to remove.`,
                pseudocode: code,
                activeLine: 0
            });
            const popped = arr.pop();
            frames.push({
                data: [...arr],
                highlights: [],
                statusMessage: `Removed element ${popped} from Rear of Deque.`,
                pseudocode: code,
                activeLine: 1
            });
        }
    } else if (operationId === 'insertpriority') {
        const code = [
            `function insertPriority(pq, val) {`,
            `  pq.push(val);`,
            `  pq.sort((a, b) => b - a); // Higher value = Higher priority`,
            `}`
        ];
        frames.push({
            data: [...arr],
            statusMessage: `Inserting ${val} into Priority Queue.`,
            pseudocode: code,
            activeLine: 0
        });
        arr.push(val);
        arr.sort((a, b) => (parseInt(b, 10) || 0) - (parseInt(a, 10) || 0));
        const idx = arr.indexOf(val);
        frames.push({
            data: [...arr],
            highlights: [idx],
            statusMessage: `Placed ${val} in Priority Queue according to priority order.`,
            pseudocode: code,
            activeLine: 2
        });
    } else if (operationId === 'enqueue') {
        const code = [
            `function enqueue(queue, val) {`,
            `  queue.push(val); // Insert at Rear`,
            `}`
        ];
        frames.push({
            data: [...arr],
            statusMessage: `Enqueuing ${val} into Queue at Rear position.`,
            pseudocode: code,
            activeLine: 0
        });
        arr.push(val);
        frames.push({
            data: [...arr],
            highlights: [arr.length - 1],
            statusMessage: `Enqueued ${val} at Rear.`,
            pseudocode: code,
            activeLine: 1
        });
    } else if (operationId === 'dequeue') {
        const code = [
            `function dequeue(queue) {`,
            `  return queue.shift(); // Remove from Front`,
            `}`
        ];
        if (arr.length === 0) {
            frames.push({ data: [], statusMessage: `Queue is empty. Cannot dequeue.`, pseudocode: code, activeLine: 0 });
        } else {
            frames.push({
                data: [...arr],
                highlights: [0],
                statusMessage: `Identifying FRONT element ${arr[0]} to dequeue.`,
                pseudocode: code,
                activeLine: 0
            });
            const dequeued = arr.shift();
            frames.push({
                data: [...arr],
                highlights: [],
                statusMessage: `Dequeued element ${dequeued} from Front.`,
                pseudocode: code,
                activeLine: 1
            });
        }
    } else if (operationId === 'search') {
        const code = [
            `function search(arr, target) {`,
            `  for (let i = 0; i < arr.length; i++) {`,
            `    if (arr[i] === target) return i; // Found!`,
            `  }`,
            `  return -1;`,
            `}`
        ];
        const searchVal = val;
        let foundIdx = -1;

        if (arr.length === 0) {
            frames.push({ data: [], statusMessage: `Structure is empty. Cannot search.`, pseudocode: code, activeLine: 0 });
        } else {
            for (let i = 0; i < arr.length; i++) {
                const isMatch = String(arr[i]) === String(searchVal);
                frames.push({
                    data: [...arr],
                    highlights: [i],
                    statusMessage: `Comparing element arr[${i}] = ${arr[i]} with target ${searchVal}`,
                    pseudocode: code,
                    activeLine: 2
                });
                if (isMatch) {
                    foundIdx = i;
                    break;
                }
            }
            if (foundIdx !== -1) {
                frames.push({
                    data: [...arr],
                    highlights: [],
                    secondaryHighlights: [foundIdx],
                    statusMessage: `Target ${searchVal} found at index ${foundIdx}!`,
                    pseudocode: code,
                    activeLine: 2
                });
            } else {
                frames.push({
                    data: [...arr],
                    highlights: [],
                    statusMessage: `Target ${searchVal} not found.`,
                    pseudocode: code,
                    activeLine: 4
                });
            }
        }
    }
    return frames;
}

function generateSortingFrames(algorithmId) {
    const frames = [];
    const arr = state.data.length ? [...state.data] : [64, 34, 25, 12, 22, 11, 90];
    const n = arr.length;
    const alg = (algorithmId || 'bubble').toLowerCase().replace('sort', '');

    if (alg === 'bubble') {
        const code = [
            `function bubbleSort(arr) {`,
            `  for (let i = 0; i < n; i++) {`,
            `    for (let j = 0; j < n-i-1; j++) {`,
            `      if (arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);`,
            `    }`,
            `  }`,
            `}`
        ];

        frames.push({
            data: [...arr],
            highlights: [],
            statusMessage: 'Starting Bubble Sort step animation...',
            pseudocode: code,
            activeLine: 0
        });

        const sortedIndices = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                frames.push({
                    data: [...arr],
                    highlights: [j, j + 1],
                    secondaryHighlights: [...sortedIndices],
                    statusMessage: `Comparing arr[${j}] (${arr[j]}) and arr[${j+1}] (${arr[j+1]})`,
                    pseudocode: code,
                    activeLine: 3
                });

                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    frames.push({
                        data: [...arr],
                        highlights: [j, j + 1],
                        secondaryHighlights: [...sortedIndices],
                        statusMessage: `Swapped: ${arr[j+1]} > ${arr[j]}`,
                        pseudocode: code,
                        activeLine: 3
                    });
                }
            }
            sortedIndices.push(n - i - 1);
        }

        frames.push({
            data: [...arr],
            highlights: [],
            secondaryHighlights: Array.from({ length: n }, (_, k) => k),
            statusMessage: 'Bubble Sort complete! Array fully sorted.',
            pseudocode: code,
            activeLine: 6
        });
    } else if (alg === 'selection') {
        const code = [
            `function selectionSort(arr) {`,
            `  for (let i = 0; i < n-1; i++) {`,
            `    let minIdx = i;`,
            `    for (let j = i+1; j < n; j++) if (arr[j] < arr[minIdx]) minIdx = j;`,
            `    swap(arr[i], arr[minIdx]);`,
            `  }`,
            `}`
        ];
        const sortedIndices = [];
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            frames.push({
                data: [...arr],
                highlights: [i],
                secondaryHighlights: [...sortedIndices],
                statusMessage: `Finding minimum element for position ${i}`,
                pseudocode: code,
                activeLine: 2
            });

            for (let j = i + 1; j < n; j++) {
                frames.push({
                    data: [...arr],
                    highlights: [j, minIdx],
                    secondaryHighlights: [...sortedIndices],
                    statusMessage: `Comparing arr[${j}] (${arr[j]}) with current min arr[${minIdx}] (${arr[minIdx]})`,
                    pseudocode: code,
                    activeLine: 3
                });
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }

            if (minIdx !== i) {
                const temp = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = temp;
            }
            sortedIndices.push(i);
            frames.push({
                data: [...arr],
                highlights: [i],
                secondaryHighlights: [...sortedIndices],
                statusMessage: `Placed minimum element ${arr[i]} at position ${i}`,
                pseudocode: code,
                activeLine: 4
            });
        }
        frames.push({
            data: [...arr],
            highlights: [],
            secondaryHighlights: Array.from({ length: n }, (_, k) => k),
            statusMessage: 'Selection Sort complete!',
            pseudocode: code,
            activeLine: 5
        });
    } else if (alg === 'insertion') {
        const code = [
            `function insertionSort(arr) {`,
            `  for (let i = 1; i < n; i++) {`,
            `    let key = arr[i], j = i - 1;`,
            `    while (j >= 0 && arr[j] > key) { arr[j+1] = arr[j]; j--; }`,
            `    arr[j+1] = key;`,
            `  }`,
            `}`
        ];
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;
            frames.push({
                data: [...arr],
                highlights: [i],
                statusMessage: `Selecting key ${key} at index ${i}`,
                pseudocode: code,
                activeLine: 2
            });

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                frames.push({
                    data: [...arr],
                    highlights: [j, j + 1],
                    statusMessage: `Shifted ${arr[j]} right`,
                    pseudocode: code,
                    activeLine: 3
                });
                j--;
            }
            arr[j + 1] = key;
            frames.push({
                data: [...arr],
                highlights: [j + 1],
                statusMessage: `Inserted key ${key} at index ${j + 1}`,
                pseudocode: code,
                activeLine: 4
            });
        }
        frames.push({
            data: [...arr],
            highlights: [],
            secondaryHighlights: Array.from({ length: n }, (_, k) => k),
            statusMessage: 'Insertion Sort complete!',
            pseudocode: code,
            activeLine: 5
        });
    } else if (alg === 'merge') {
        const code = [
            `function mergeSort(arr, l, r) {`,
            `  if (l < r) {`,
            `    let m = Math.floor((l+r)/2);`,
            `    mergeSort(arr, l, m); mergeSort(arr, m+1, r);`,
            `    merge(arr, l, m, r);`,
            `  }`,
            `}`
        ];

        function merge(arrRef, l, m, r) {
            let n1 = m - l + 1;
            let n2 = r - m;
            let L = arrRef.slice(l, m + 1);
            let R = arrRef.slice(m + 1, r + 1);

            frames.push({
                data: [...arrRef],
                highlights: Array.from({ length: r - l + 1 }, (_, k) => l + k),
                statusMessage: `Merging sub-arrays [${L.join(', ')}] and [${R.join(', ')}]`,
                pseudocode: code,
                activeLine: 4
            });

            let i = 0, j = 0, k = l;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arrRef[k] = L[i];
                    i++;
                } else {
                    arrRef[k] = R[j];
                    j++;
                }
                frames.push({
                    data: [...arrRef],
                    highlights: [k],
                    statusMessage: `Placed element ${arrRef[k]} into merged position ${k}`,
                    pseudocode: code,
                    activeLine: 4
                });
                k++;
            }

            while (i < n1) {
                arrRef[k] = L[i];
                i++; k++;
            }
            while (j < n2) {
                arrRef[k] = R[j];
                j++; k++;
            }
        }

        function runMergeSort(arrRef, l, r) {
            if (l < r) {
                let m = Math.floor((l + r) / 2);
                runMergeSort(arrRef, l, m);
                runMergeSort(arrRef, m + 1, r);
                merge(arrRef, l, m, r);
            }
        }

        runMergeSort(arr, 0, n - 1);
        frames.push({
            data: [...arr],
            highlights: [],
            secondaryHighlights: Array.from({ length: n }, (_, k) => k),
            statusMessage: 'Merge Sort complete!',
            pseudocode: code,
            activeLine: 5
        });
    } else if (alg === 'quick') {
        const code = [
            `function quickSort(arr, low, high) {`,
            `  if (low < high) {`,
            `    let pivotIdx = partition(arr, low, high);`,
            `    quickSort(arr, low, pivotIdx - 1);`,
            `    quickSort(arr, pivotIdx + 1, high);`,
            `  }`,
            `}`
        ];

        function partition(arrRef, low, high) {
            let pivot = arrRef[high];
            let i = low - 1;
            frames.push({
                data: [...arrRef],
                highlights: [high],
                pointers: { pivot: high, low, high, i },
                statusMessage: `Partitioning range [${low}..${high}] with Pivot = ${pivot}`,
                pseudocode: code,
                activeLine: 2
            });

            for (let j = low; j < high; j++) {
                frames.push({
                    data: [...arrRef],
                    highlights: [j, high],
                    pointers: { low, high, pivot: high, i, j },
                    statusMessage: `Comparing arr[${j}] (${arrRef[j]}) with Pivot (${pivot})`,
                    pseudocode: code,
                    activeLine: 2
                });
                if (arrRef[j] < pivot) {
                    i++;
                    const temp = arrRef[i];
                    arrRef[i] = arrRef[j];
                    arrRef[j] = temp;
                }
            }
            const temp = arrRef[i + 1];
            arrRef[i + 1] = arrRef[high];
            arrRef[high] = temp;
            return i + 1;
        }

        function runQuickSort(arrRef, low, high) {
            if (low < high) {
                let p = partition(arrRef, low, high);
                runQuickSort(arrRef, low, p - 1);
                runQuickSort(arrRef, p + 1, high);
            }
        }

        runQuickSort(arr, 0, n - 1);
        frames.push({
            data: [...arr],
            highlights: [],
            secondaryHighlights: Array.from({ length: n }, (_, k) => k),
            statusMessage: 'Quick Sort complete!',
            pseudocode: code,
            activeLine: 4
        });
    } else if (alg === 'heap') {
        const code = [
            `function heapSort(arr) {`,
            `  buildMaxHeap(arr);`,
            `  for (let i = n - 1; i > 0; i--) {`,
            `    swap(arr[0], arr[i]); heapifyDown(arr, 0, i);`,
            `  }`,
            `}`
        ];

        function heapify(arrRef, N, i) {
            let largest = i;
            let l = 2 * i + 1;
            let r = 2 * i + 2;

            if (l < N && arrRef[l] > arrRef[largest]) largest = l;
            if (r < N && arrRef[r] > arrRef[largest]) largest = r;

            if (largest !== i) {
                let swap = arrRef[i];
                arrRef[i] = arrRef[largest];
                arrRef[largest] = swap;

                frames.push({
                    data: [...arrRef],
                    highlights: [i, largest],
                    statusMessage: `Heapify Down: Swapped ${arrRef[largest]} with ${arrRef[i]}`,
                    pseudocode: code,
                    activeLine: 3
                });

                heapify(arrRef, N, largest);
            }
        }

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

        frames.push({
            data: [...arr],
            statusMessage: 'Max Heap built! Starting extraction of root elements...',
            pseudocode: code,
            activeLine: 1
        });

        for (let i = n - 1; i > 0; i--) {
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            frames.push({
                data: [...arr],
                highlights: [0, i],
                secondaryHighlights: Array.from({ length: n - i }, (_, k) => i + k),
                statusMessage: `Swapped max root element ${arr[i]} to end position ${i}`,
                pseudocode: code,
                activeLine: 3
            });

            heapify(arr, i, 0);
        }

        frames.push({
            data: [...arr],
            secondaryHighlights: Array.from({ length: n }, (_, k) => k),
            statusMessage: 'Heap Sort complete!',
            pseudocode: code,
            activeLine: 4
        });
    } else if (alg === 'shell') {
        const code = [
            `function shellSort(arr) {`,
            `  for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {`,
            `    for (let i = gap; i < n; i++) {`,
            `      let temp = arr[i], j = i;`,
            `      while (j >= gap && arr[j-gap] > temp) { arr[j] = arr[j-gap]; j -= gap; }`,
            `      arr[j] = temp;`,
            `    }`,
            `  }`,
            `}`
        ];

        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            frames.push({
                data: [...arr],
                statusMessage: `Current Shell Gap = ${gap}`,
                pseudocode: code,
                activeLine: 1
            });

            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j = i;
                frames.push({
                    data: [...arr],
                    highlights: [i, i - gap],
                    statusMessage: `Comparing gap elements arr[${i}] (${temp}) and arr[${i-gap}] (${arr[i-gap]})`,
                    pseudocode: code,
                    activeLine: 3
                });

                while (j >= gap && arr[j - gap] > temp) {
                    arr[j] = arr[j - gap];
                    j -= gap;
                }
                arr[j] = temp;
            }
        }

        frames.push({
            data: [...arr],
            secondaryHighlights: Array.from({ length: n }, (_, k) => k),
            statusMessage: 'Shell Sort complete!',
            pseudocode: code,
            activeLine: 7
        });
    } else if (alg === 'counting') {
        const code = [
            `function countingSort(arr) {`,
            `  let max = Math.max(...arr); let count = new Array(max + 1).fill(0);`,
            `  for (let x of arr) count[x]++;`,
            `  for (let i = 0, k = 0; i <= max; i++) while (count[i]-- > 0) arr[k++] = i;`,
            `}`
        ];

        const maxVal = Math.max(...arr);
        const count = new Array(maxVal + 1).fill(0);

        arr.forEach((x, i) => {
            count[x]++;
            frames.push({
                data: [...arr],
                highlights: [i],
                statusMessage: `Counting frequency of ${x} ➔ count[${x}] = ${count[x]}`,
                pseudocode: code,
                activeLine: 2
            });
        });

        let idx = 0;
        for (let i = 0; i <= maxVal; i++) {
            while (count[i] > 0) {
                arr[idx] = i;
                frames.push({
                    data: [...arr],
                    highlights: [idx],
                    secondaryHighlights: Array.from({ length: idx + 1 }, (_, k) => k),
                    statusMessage: `Reconstructing sorted array: placed ${i} at index ${idx}`,
                    pseudocode: code,
                    activeLine: 3
                });
                count[i]--;
                idx++;
            }
        }
    } else if (alg === 'radix') {
        const code = [
            `function radixSort(arr) {`,
            `  let max = Math.max(...arr);`,
            `  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10)`,
            `    countSortByDigit(arr, exp);`,
            `}`
        ];

        const maxVal = Math.max(...arr);
        for (let exp = 1; Math.floor(maxVal / exp) > 0; exp *= 10) {
            frames.push({
                data: [...arr],
                statusMessage: `Sorting by digit place exp = ${exp}`,
                pseudocode: code,
                activeLine: 2
            });

            arr.sort((a, b) => Math.floor(a / exp) % 10 - Math.floor(b / exp) % 10);

            frames.push({
                data: [...arr],
                secondaryHighlights: Array.from({ length: n }, (_, k) => k),
                statusMessage: `Array state after sorting by digit exp=${exp}: [${arr.join(', ')}]`,
                pseudocode: code,
                activeLine: 3
            });
        }
    } else if (alg === 'bucket') {
        const code = [
            `function bucketSort(arr) {`,
            `  let buckets = Array.from({length: 5}, () => []);`,
            `  for (let x of arr) buckets[getBucketIdx(x)].push(x);`,
            `  for (let b of buckets) b.sort();`,
            `  arr = [].concat(...buckets);`,
            `}`
        ];

        frames.push({
            data: [...arr],
            statusMessage: 'Distributing elements into range buckets...',
            pseudocode: code,
            activeLine: 2
        });

        arr.sort((a, b) => a - b);

        frames.push({
            data: [...arr],
            secondaryHighlights: Array.from({ length: n }, (_, k) => k),
            statusMessage: 'Bucket Sort complete! Buckets sorted and concatenated.',
            pseudocode: code,
            activeLine: 4
        });
    } else {
        return generateSortingFrames('bubble');
    }

    return frames;
}

function generateSearchFrames(algorithmId, value) {
    const frames = [];
    const arr = state.data.length ? [...state.data] : [5, 8, 12, 19, 25, 33, 42, 50];
    const target = value !== '' ? (parseInt(value, 10) || 19) : 19;

    if (algorithmId === 'binary') {
        const code = [
            `function binarySearch(arr, target) {`,
            `  let low = 0, high = arr.length - 1;`,
            `  while (low <= high) {`,
            `    let mid = Math.floor((low + high) / 2);`,
            `    if (arr[mid] === target) return mid;`,
            `    else if (arr[mid] < target) low = mid + 1;`,
            `    else high = mid - 1;`,
            `  }`,
            `  return -1;`,
            `}`
        ];

        arr.sort((a, b) => a - b);
        let low = 0;
        let high = arr.length - 1;
        let found = false;

        frames.push({
            data: [...arr],
            highlights: [],
            pointers: { low, high },
            statusMessage: `Starting Binary Search for target ${target} in sorted array.`,
            pseudocode: code,
            activeLine: 1
        });

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            frames.push({
                data: [...arr],
                highlights: [mid],
                pointers: { low, mid, high },
                statusMessage: `Calculated mid = ${mid} (arr[mid] = ${arr[mid]}). Comparing with target ${target}.`,
                pseudocode: code,
                activeLine: 3
            });

            if (arr[mid] === target) {
                found = true;
                frames.push({
                    data: [...arr],
                    highlights: [],
                    secondaryHighlights: [mid],
                    pointers: { mid },
                    statusMessage: `SUCCESS! Target ${target} found at index ${mid}.`,
                    pseudocode: code,
                    activeLine: 4
                });
                break;
            } else if (arr[mid] < target) {
                low = mid + 1;
                frames.push({
                    data: [...arr],
                    highlights: [mid],
                    pointers: { low, high },
                    statusMessage: `arr[mid] (${arr[mid]}) < target (${target}). Setting low = mid + 1 (${low}).`,
                    pseudocode: code,
                    activeLine: 5
                });
            } else {
                high = mid - 1;
                frames.push({
                    data: [...arr],
                    highlights: [mid],
                    pointers: { low, high },
                    statusMessage: `arr[mid] (${arr[mid]}) > target (${target}). Setting high = mid - 1 (${high}).`,
                    pseudocode: code,
                    activeLine: 6
                });
            }
        }

        if (!found) {
            frames.push({
                data: [...arr],
                highlights: [],
                statusMessage: `Target ${target} not present in array.`,
                pseudocode: code,
                activeLine: 8
            });
        }
    } else {
        return generateArrayFrames('search', target);
    }

    return frames;
}

function generateTreeFrames(operationId, value) {
    const frames = [];
    let nodes = Array.isArray(state.data) ? [...state.data] : [];
    const isStringVal = (state.current === 'prefixtree' || state.current === 'trie' || state.current === 'suffixtree');
    const val = value !== '' ? (isStringVal ? value : (parseInt(value, 10) || 45)) : (isStringVal ? 'cat' : 45);

    if (operationId === 'insert') {
        const code = [
            `function insertTree(val) {`,
            `  if (!root) root = new Node(val);`,
            `  else insertHelper(root, val);`,
            `}`
        ];
        frames.push({
            data: [...nodes],
            statusMessage: `Preparing to insert node ${val} into ${titleCase(state.current)}.`,
            pseudocode: code,
            activeLine: 0
        });
        nodes.push(val);
        frames.push({
            data: [...nodes],
            highlights: [nodes.length - 1],
            statusMessage: `Inserted node ${val} into tree at position index ${nodes.length - 1}.`,
            pseudocode: code,
            activeLine: 2
        });
    } else if (operationId === 'inorder' || operationId === 'preorder' || operationId === 'postorder' || operationId === 'levelorder') {
        if (nodes.length === 0) {
            nodes = [50, 30, 70, 20, 40, 60, 80];
        }
        const visited = [];
        const code = [`// ${titleCase(operationId)} Traversal`, `visitNode(curr);` ];

        if (operationId === 'inorder') {
            function inorder(index) {
                if (index >= nodes.length || nodes[index] === null) return;
                inorder(2 * index + 1);
                visited.push(index);
                frames.push({
                    data: [...nodes],
                    highlights: [index],
                    secondaryHighlights: [...visited],
                    statusMessage: `Inorder Visited Node: ${nodes[index]}`,
                    pseudocode: code,
                    activeLine: 1
                });
                inorder(2 * index + 2);
            }
            inorder(0);
        } else if (operationId === 'preorder') {
            function preorder(index) {
                if (index >= nodes.length || nodes[index] === null) return;
                visited.push(index);
                frames.push({
                    data: [...nodes],
                    highlights: [index],
                    secondaryHighlights: [...visited],
                    statusMessage: `Preorder Visited Node: ${nodes[index]}`,
                    pseudocode: code,
                    activeLine: 1
                });
                preorder(2 * index + 1);
                preorder(2 * index + 2);
            }
            preorder(0);
        } else if (operationId === 'postorder') {
            function postorder(index) {
                if (index >= nodes.length || nodes[index] === null) return;
                postorder(2 * index + 1);
                postorder(2 * index + 2);
                visited.push(index);
                frames.push({
                    data: [...nodes],
                    highlights: [index],
                    secondaryHighlights: [...visited],
                    statusMessage: `Postorder Visited Node: ${nodes[index]}`,
                    pseudocode: code,
                    activeLine: 1
                });
            }
            postorder(0);
        } else { // Level Order (BFS)
            const q = [0];
            while (q.length > 0) {
                const idx = q.shift();
                if (idx < nodes.length && nodes[idx] !== null) {
                    visited.push(idx);
                    frames.push({
                        data: [...nodes],
                        highlights: [idx],
                        secondaryHighlights: [...visited],
                        statusMessage: `Level Order (BFS) Visited Node: ${nodes[idx]}`,
                        pseudocode: [`// Level Order (BFS)`, `q.enqueue(root);`, `u = q.dequeue(); visit(u);`],
                        activeLine: 2
                    });
                    q.push(2 * idx + 1);
                    q.push(2 * idx + 2);
                }
            }
        }
    } else {
        return generateTreeFrames('insert', value);
    }
    return frames;
}

function generateHashTableFrames(operationId, value) {
    const frames = [];
    const val = value !== '' ? (parseInt(value, 10) || 42) : 42;
    const bucketIdx = Math.abs(val) % 7;

    const code = [
        `function ${operationId}HashTable(key) {`,
        `  const bucket = hash(key) % BUCKET_COUNT; // h(${val}) = ${bucketIdx}`,
        `  ${operationId}InBucketChain(bucketList[bucket], key);`,
        `}`
    ];

    let buckets = [
        [14, 28],
        [15],
        [9, 23],
        [10],
        [],
        [19],
        [6]
    ];

    if (operationId === 'insert') {
        frames.push({
            data: JSON.parse(JSON.stringify(buckets)),
            highlights: [`b-${bucketIdx}`],
            statusMessage: `Calculated Hash Value: h(${val}) = ${val} mod 7 = ${bucketIdx}. Navigating to Bucket [${bucketIdx}]...`,
            pseudocode: code,
            activeLine: 1
        });

        buckets[bucketIdx].push(val);

        frames.push({
            data: JSON.parse(JSON.stringify(buckets)),
            highlights: [`b-${bucketIdx}`],
            secondaryHighlights: [`k-${bucketIdx}-${buckets[bucketIdx].length - 1}`],
            statusMessage: `Inserted key ${val} into Bucket [${bucketIdx}] separate chaining linked list.`,
            pseudocode: code,
            activeLine: 2
        });
    } else if (operationId === 'search') {
        frames.push({
            data: JSON.parse(JSON.stringify(buckets)),
            highlights: [`b-${bucketIdx}`],
            statusMessage: `Searching key ${val}: h(${val}) = ${val} mod 7 = ${bucketIdx}. Checking Bucket [${bucketIdx}]...`,
            pseudocode: code,
            activeLine: 1
        });

        const chain = buckets[bucketIdx];
        const foundPos = chain.indexOf(val);

        if (foundPos !== -1) {
            frames.push({
                data: JSON.parse(JSON.stringify(buckets)),
                secondaryHighlights: [`k-${bucketIdx}-${foundPos}`],
                statusMessage: `SUCCESS! Key ${val} found in Bucket [${bucketIdx}] at chain node ${foundPos}.`,
                pseudocode: code,
                activeLine: 2
            });
        } else {
            frames.push({
                data: JSON.parse(JSON.stringify(buckets)),
                statusMessage: `Key ${val} not present in Bucket [${bucketIdx}] chain.`,
                pseudocode: code,
                activeLine: 2
            });
        }
    } else { // Delete
        frames.push({
            data: JSON.parse(JSON.stringify(buckets)),
            highlights: [`b-${bucketIdx}`],
            statusMessage: `Deleting key ${val}: h(${val}) = ${val} mod 7 = ${bucketIdx}. Checking Bucket [${bucketIdx}]...`,
            pseudocode: code,
            activeLine: 1
        });

        const chain = buckets[bucketIdx];
        const idx = chain.indexOf(val);
        if (idx !== -1) {
            chain.splice(idx, 1);
            frames.push({
                data: JSON.parse(JSON.stringify(buckets)),
                statusMessage: `Removed key ${val} from Bucket [${bucketIdx}] chain.`,
                pseudocode: code,
                activeLine: 2
            });
        } else {
            frames.push({
                data: JSON.parse(JSON.stringify(buckets)),
                statusMessage: `Key ${val} not found in Bucket [${bucketIdx}]. Cannot delete.`,
                pseudocode: code,
                activeLine: 2
            });
        }
    }

    return frames;
}

function generateHeapFrames(operationId, value, mode = 'max') {
    const frames = [];
    let arr = Array.isArray(state.data) && state.data.length ? [...state.data] : (mode === 'min' ? [12, 20, 15, 30, 25, 40] : [50, 40, 35, 10, 20, 30]);
    const val = value !== '' ? (parseInt(value, 10) || (mode === 'min' ? 8 : 65)) : (mode === 'min' ? 8 : 65);
    const isMin = mode === 'min';

    const code = [
        `function insert${isMin ? 'Min' : 'Max'}Heap(val) {`,
        `  heap.push(val);`,
        `  heapifyUp(heap.length - 1);`,
        `}`
    ];

    if (operationId === 'insert') {
        arr.push(val);
        frames.push({
            data: [...arr],
            highlights: [arr.length - 1],
            statusMessage: `Inserted ${val} at end of ${isMin ? 'Min' : 'Max'} Heap array. Sifting Up...`,
            pseudocode: code,
            activeLine: 1
        });

        let current = arr.length - 1;
        while (current > 0) {
            let parent = Math.floor((current - 1) / 2);
            frames.push({
                data: [...arr],
                highlights: [current, parent],
                statusMessage: `Comparing child (${arr[current]}) with parent (${arr[parent]})`,
                pseudocode: code,
                activeLine: 2
            });

            const condition = isMin ? arr[current] < arr[parent] : arr[current] > arr[parent];
            if (condition) {
                const temp = arr[current];
                arr[current] = arr[parent];
                arr[parent] = temp;

                frames.push({
                    data: [...arr],
                    highlights: [parent],
                    statusMessage: `Swapped child ${arr[parent]} with parent ${arr[current]}. ${isMin ? 'Min' : 'Max'} property satisfied!`,
                    pseudocode: code,
                    activeLine: 2
                });
                current = parent;
            } else {
                break;
            }
        }
    } else if (operationId === 'extractmin' || operationId === 'extractmax' || operationId === 'extract') {
        if (arr.length === 0) {
            frames.push({ data: [], statusMessage: `${isMin ? 'Min' : 'Max'} Heap is empty. Cannot extract root.`, pseudocode: code, activeLine: 0 });
        } else {
            const rootVal = arr[0];
            frames.push({
                data: [...arr],
                highlights: [0],
                statusMessage: `Extracting ${isMin ? 'Min' : 'Max'} Root: ${rootVal}`,
                pseudocode: [`// Extract ${isMin ? 'Min' : 'Max'} Root`, `const root = heap[0];`, `heap[0] = heap.pop();`, `heapifyDown(0);`],
                activeLine: 1
            });

            if (arr.length === 1) {
                arr.pop();
                frames.push({ data: [], statusMessage: 'Heap is now empty.', pseudocode: code, activeLine: 2 });
            } else {
                arr[0] = arr.pop();
                frames.push({
                    data: [...arr],
                    highlights: [0],
                    statusMessage: `Replaced root with last element (${arr[0]}). Sifting Down...`,
                    pseudocode: [`// Sift Down Root`, `heapifyDown(0);`],
                    activeLine: 2
                });

                let current = 0;
                while (true) {
                    let left = 2 * current + 1;
                    let right = 2 * current + 2;
                    let target = current;

                    if (left < arr.length) {
                        const condL = isMin ? arr[left] < arr[target] : arr[left] > arr[target];
                        if (condL) target = left;
                    }
                    if (right < arr.length) {
                        const condR = isMin ? arr[right] < arr[target] : arr[right] > arr[target];
                        if (condR) target = right;
                    }

                    if (target !== current) {
                        frames.push({
                            data: [...arr],
                            highlights: [current, target],
                            statusMessage: `Comparing parent (${arr[current]}) with ${isMin ? 'smaller' : 'larger'} child (${arr[target]})`,
                            pseudocode: [`// Sift Down`, `swap(parent, child);`],
                            activeLine: 1
                        });

                        const temp = arr[current];
                        arr[current] = arr[target];
                        arr[target] = temp;
                        current = target;
                    } else {
                        break;
                    }
                }
            }
        }
    } else if (operationId === 'heapify') {
        if (arr.length === 0) arr = isMin ? [40, 20, 30, 10, 15, 5] : [15, 30, 40, 10, 35, 20, 25];
        frames.push({
            data: [...arr],
            statusMessage: `Building ${isMin ? 'Min' : 'Max'} Heap from unsorted array...`,
            pseudocode: [`// Build Heap`, `for (let i = n/2; i >= 0; i--) heapifyDown(i);`],
            activeLine: 1
        });
        arr.sort((a, b) => isMin ? a - b : b - a);
        frames.push({
            data: [...arr],
            secondaryHighlights: Array.from({ length: arr.length }, (_, k) => k),
            statusMessage: `${isMin ? 'Min' : 'Max'} Heap construction complete!`,
            pseudocode: [`// Build Heap`, `heapifyDown complete!`],
            activeLine: 1
        });
    }

    return frames;
}

function generateBinomialHeapFrames(operationId, value) {
    const frames = [];
    const val = value !== '' ? (parseInt(value, 10) || 15) : 15;
    const code = [
        `function insertBinomial(val) {`,
        `  const newTree = new BinomialTree(val); // B₀`,
        `  binomialHeap = union(binomialHeap, newTree);`,
        `}`
    ];

    let trees = [
        { degree: 0, val: 12, children: [] },
        { degree: 1, val: 7, children: [{ val: 25 }] },
        { degree: 2, val: 3, children: [{ val: 18, children: [{ val: 30 }] }, { val: 10 }] }
    ];

    if (operationId === 'insert') {
        frames.push({
            data: JSON.parse(JSON.stringify(trees)),
            statusMessage: `Creating new Binomial Tree B₀ with key ${val}...`,
            pseudocode: code,
            activeLine: 1
        });

        trees.unshift({ degree: 0, val: val, children: [] });

        frames.push({
            data: JSON.parse(JSON.stringify(trees)),
            highlights: [val],
            statusMessage: `Added B₀(${val}) to Binomial Heap root list. Merging equal-degree trees (Union)...`,
            pseudocode: code,
            activeLine: 2
        });

        trees = [
            { degree: 1, val: 12, children: [{ val: val }] },
            { degree: 1, val: 7, children: [{ val: 25 }] },
            { degree: 2, val: 3, children: [{ val: 18, children: [{ val: 30 }] }, { val: 10 }] }
        ];

        frames.push({
            data: JSON.parse(JSON.stringify(trees)),
            highlights: [12, val],
            statusMessage: `Merged B₀(${val}) + B₀(12) ➔ New Binomial Tree B₁(12).`,
            pseudocode: code,
            activeLine: 2
        });
    } else if (operationId === 'extractmin') {
        frames.push({
            data: JSON.parse(JSON.stringify(trees)),
            highlights: [3],
            statusMessage: `Found Minimum Root Key: 3 in Tree B₂. Removing Root 3...`,
            pseudocode: [`// Extract Min Key`, `removeRoot(minNode);`, `union(rootList, childrenList);`],
            activeLine: 1
        });

        trees = [
            { degree: 0, val: 12, children: [] },
            { degree: 1, val: 7, children: [{ val: 25 }] },
            { degree: 1, val: 10, children: [] },
            { degree: 1, val: 18, children: [{ val: 30 }] }
        ];

        frames.push({
            data: JSON.parse(JSON.stringify(trees)),
            statusMessage: `Extracted Min Root 3. Unlinked children [18, 10] into root list. Unioning trees...`,
            pseudocode: [`// Unioning children with heap root list`, `unionComplete();`],
            activeLine: 2
        });
    } else {
        frames.push({
            data: JSON.parse(JSON.stringify(trees)),
            statusMessage: `Executing Binomial Heap Union operation...`,
            pseudocode: [`// Binomial Heap Union`, `mergeTreeRoots();`],
            activeLine: 0
        });
    }

    return frames;
}

function generateFibonacciHeapFrames(operationId, value) {
    const frames = [];
    const val = value !== '' ? (parseInt(value, 10) || 5) : 5;
    const code = [
        `function insertFibonacci(val) {`,
        `  const node = new FibNode(val);`,
        `  rootList.insert(node); // Doubly Linked Ring`,
        `  if (val < min.key) min = node;`,
        `}`
    ];

    let roots = [
        { val: 23, min: false, children: [] },
        { val: 7, min: true, children: [{ val: 18 }, { val: 39, children: [{ val: 52 }] }] },
        { val: 17, min: false, children: [{ val: 30 }] },
        { val: 24, min: false, children: [] }
    ];

    if (operationId === 'insert') {
        frames.push({
            data: JSON.parse(JSON.stringify(roots)),
            statusMessage: `Preparing to insert key ${val} into Fibonacci Heap...`,
            pseudocode: code,
            activeLine: 1
        });

        const isNewMin = val < 7;
        if (isNewMin) {
            roots.forEach(r => r.min = false);
        }

        roots.unshift({ val: val, min: isNewMin, children: [] });

        frames.push({
            data: JSON.parse(JSON.stringify(roots)),
            highlights: [val],
            statusMessage: `Inserted key ${val} into circular root list. ${isNewMin ? 'Updated MIN pointer!' : 'MIN pointer remains at 7.'}`,
            pseudocode: code,
            activeLine: 3
        });
    } else if (operationId === 'extractmin') {
        frames.push({
            data: JSON.parse(JSON.stringify(roots)),
            highlights: [7],
            statusMessage: `Extracting Minimum Key 7 pointed to by MIN pointer...`,
            pseudocode: [`// Extract Min Node`, `z = min;`, `for child in z.children: add to rootList;`, `consolidate();`],
            activeLine: 1
        });

        roots = [
            { val: 17, min: true, children: [{ val: 18 }, { val: 30 }] },
            { val: 23, min: false, children: [] },
            { val: 24, min: false, children: [{ val: 39, children: [{ val: 52 }] }] }
        ];

        frames.push({
            data: JSON.parse(JSON.stringify(roots)),
            statusMessage: `Consolidated trees of equal degree! New MIN pointer updated to 17.`,
            pseudocode: [`// Consolidation Complete`, `updateMinPointer();`],
            activeLine: 3
        });
    } else {
        frames.push({
            data: JSON.parse(JSON.stringify(roots)),
            statusMessage: `Decreasing key of target node and performing cascading cut...`,
            pseudocode: [`function decreaseKey(node, newKey) {`, `  node.key = newKey;`, `  if (node.key < node.parent.key) cut(node, parent);`, `}`],
            activeLine: 2
        });
    }

    return frames;
}

function generateGraphTraversalFrames(algorithmId) {
    const frames = [];
    const data = {
        nodes: [1, 2, 3, 4, 5, 6],
        edges: [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6]],
        weights: {}
    };

    if (algorithmId === 'bfs') {
        const code = [
            `function BFS(graph, start) {`,
            `  queue.enqueue(start); visited.add(start);`,
            `  while (!queue.isEmpty()) {`,
            `    u = queue.dequeue();`,
            `    for (v in u.neighbors) if (!visited.has(v)) enqueue(v);`,
            `  }`,
            `}`
        ];
        frames.push({
            data,
            highlights: [1],
            statusMessage: `BFS Step 1: Enqueued Start Node 1 into Queue [1]. Visited: {1}`,
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data,
            highlights: [1, 2, 3],
            edgeHighlights: ['1-2', '1-3'],
            secondaryHighlights: [1],
            statusMessage: `BFS Step 2: Dequeued 1. Enqueued unvisited neighbors 2 and 3 into Queue [2, 3]. Visited: {1, 2, 3}`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [2, 4, 5],
            edgeHighlights: ['2-4', '2-5'],
            secondaryHighlights: [1, 2, 3],
            statusMessage: `BFS Step 3: Dequeued 2. Enqueued neighbors 4 and 5 into Queue [3, 4, 5]. Visited: {1, 2, 3, 4, 5}`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [3, 6],
            edgeHighlights: ['3-6'],
            secondaryHighlights: [1, 2, 3, 4, 5, 6],
            statusMessage: `BFS Step 4: Dequeued 3. Enqueued neighbor 6 into Queue [4, 5, 6]. Traversal Complete!`,
            pseudocode: code,
            activeLine: 5
        });
    } else { // DFS
        const code = [
            `function DFS(graph, start) {`,
            `  stack.push(start); visited.add(start);`,
            `  while (!stack.isEmpty()) {`,
            `    u = stack.pop();`,
            `    for (v in u.neighbors) if (!visited.has(v)) stack.push(v);`,
            `  }`,
            `}`
        ];
        frames.push({
            data,
            highlights: [1],
            statusMessage: `DFS Step 1: Pushed Start Node 1 onto Stack [1]. Visited: {1}`,
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data,
            highlights: [1, 2],
            edgeHighlights: ['1-2'],
            secondaryHighlights: [1],
            statusMessage: `DFS Step 2: Deep traversal down branch 1 ➔ 2. Pushed 2 onto Stack [1, 2]. Visited: {1, 2}`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [2, 4],
            edgeHighlights: ['2-4'],
            secondaryHighlights: [1, 2, 4],
            statusMessage: `DFS Step 3: Deep traversal down branch 2 ➔ 4. Visited: {1, 2, 4}`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [2, 5],
            edgeHighlights: ['2-5'],
            secondaryHighlights: [1, 2, 4, 5],
            statusMessage: `DFS Step 4: Backtracked to 2, deep traversed branch 2 ➔ 5. Visited: {1, 2, 4, 5}`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [1, 3, 6],
            edgeHighlights: ['1-3', '3-6'],
            secondaryHighlights: [1, 2, 4, 5, 3, 6],
            statusMessage: `DFS Step 5: Backtracked to 1, deep traversed branch 1 ➔ 3 ➔ 6. Traversal Complete!`,
            pseudocode: code,
            activeLine: 5
        });
    }
    return frames;
}

function generateMSTFrames(algorithmId) {
    const frames = [];
    const data = {
        nodes: [1, 2, 3, 4, 5],
        edges: [[1, 2], [1, 3], [2, 3], [2, 4], [3, 4], [4, 5], [3, 5]],
        weights: { '1-2': 2, '1-3': 3, '2-3': 1, '2-4': 4, '3-4': 5, '4-5': 7, '3-5': 6 }
    };

    if (algorithmId === 'prims') {
        const code = [
            `function PrimMST(graph, start) {`,
            `  mstNodes.add(start);`,
            `  while (mstNodes.length < V) {`,
            `    (u, v) = minWeightEdge(cut(mstNodes, V - mstNodes));`,
            `    mstEdges.add(u, v); mstNodes.add(v);`,
            `  }`,
            `}`
        ];
        frames.push({
            data,
            highlights: [1],
            statusMessage: `Prim's MST: Starting from seed Node 1. MST Set = {1}`,
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data,
            highlights: [1, 2],
            edgeHighlights: ['1-2'],
            statusMessage: `Prim's MST Step 1: Selected minimum weight edge (1-2) with weight 2. Added Node 2 to MST.`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [1, 2, 3],
            edgeHighlights: ['1-2', '2-3'],
            statusMessage: `Prim's MST Step 2: Selected minimum cut edge (2-3) with weight 1. Added Node 3 to MST.`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [1, 2, 3, 4],
            edgeHighlights: ['1-2', '2-3', '2-4'],
            statusMessage: `Prim's MST Step 3: Selected minimum cut edge (2-4) with weight 4. Added Node 4 to MST.`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [1, 2, 3, 4, 5],
            edgeHighlights: ['1-2', '2-3', '2-4', '3-5'],
            statusMessage: `Prim's MST Complete! Minimum Spanning Tree weight = 2+1+4+6 = 13.`,
            pseudocode: code,
            activeLine: 5
        });
    } else { // Kruskal's
        const code = [
            `function KruskalMST(graph) {`,
            `  sortEdgesByWeight(edges);`,
            `  for edge(u, v, w) in sortedEdges:`,
            `    if (find(u) != find(v)) { union(u, v); mstEdges.add(edge); }`,
            `}`
        ];
        frames.push({
            data,
            statusMessage: `Kruskal's MST: Sorted Edges by weight: [(2-3:1), (1-2:2), (1-3:3), (2-4:4), (3-4:5), (3-5:6), (4-5:7)]`,
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data,
            highlights: [2, 3],
            edgeHighlights: ['2-3'],
            statusMessage: `Kruskal's Step 1: Processing lightest edge (2-3: w=1). Disjoint sets union ({2}, {3}) ➔ {2, 3}.`,
            pseudocode: code,
            activeLine: 3
        });
        frames.push({
            data,
            highlights: [1, 2, 3],
            edgeHighlights: ['2-3', '1-2'],
            statusMessage: `Kruskal's Step 2: Processing edge (1-2: w=2). Union ({1}, {2, 3}) ➔ {1, 2, 3}.`,
            pseudocode: code,
            activeLine: 3
        });
        frames.push({
            data,
            highlights: [1, 3],
            edgeHighlights: ['2-3', '1-2'],
            statusMessage: `Kruskal's Step 3: Processing edge (1-3: w=3). Find(1) == Find(3)! Cycle Detected! Skipped!`,
            pseudocode: code,
            activeLine: 3
        });
        frames.push({
            data,
            highlights: [1, 2, 3, 4, 5],
            edgeHighlights: ['2-3', '1-2', '2-4', '3-5'],
            statusMessage: `Kruskal's MST Complete! Final MST Edges: [(2-3:1), (1-2:2), (2-4:4), (3-5:6)]. Total weight = 13.`,
            pseudocode: code,
            activeLine: 3
        });
    }
    return frames;
}

function generateShortestPathFrames(algorithmId) {
    const frames = [];
    const data = {
        nodes: [1, 2, 3, 4, 5],
        edges: [[1, 2], [1, 3], [2, 4], [3, 4], [4, 5]],
        weights: { '1-2': 4, '1-3': 2, '2-4': 5, '3-4': 1, '4-5': 3 }
    };

    if (algorithmId === 'dijkstra') {
        const code = [
            `function Dijkstra(graph, start) {`,
            `  dist[start] = 0; pq.insert(start);`,
            `  while (!pq.isEmpty()) {`,
            `    u = pq.extractMin();`,
            `    for (v in u.neighbors) relax(u, v);`,
            `  }`,
            `}`
        ];
        frames.push({
            data,
            highlights: [1],
            statusMessage: `Dijkstra: Starting from Source Node 1. Distances: [1:0, 2:∞, 3:∞, 4:∞, 5:∞]`,
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data,
            highlights: [1, 3],
            edgeHighlights: ['1-3'],
            secondaryHighlights: [1],
            statusMessage: `Relaxing edge (1-3) w=2. Updated dist[3] = 2. PQ: [3:2, 2:4]`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [3, 4],
            edgeHighlights: ['1-3', '3-4'],
            secondaryHighlights: [1, 3],
            statusMessage: `Extracted min Node 3 (dist=2). Relaxing edge (3-4) w=1. Updated dist[4] = 3.`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [4, 5],
            edgeHighlights: ['1-3', '3-4', '4-5'],
            secondaryHighlights: [1, 3, 4, 5],
            statusMessage: `Dijkstra Complete! Shortest paths from Node 1: [1:0, 2:4, 3:2, 4:3, 5:6]`,
            pseudocode: code,
            activeLine: 5
        });
    } else if (algorithmId === 'bellmanford') {
        const code = [
            `function BellmanFord(graph, start) {`,
            `  dist[start] = 0;`,
            `  for pass = 1 to V-1:`,
            `    for (u, v, w) in edges: if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;`,
            `}`
        ];
        frames.push({
            data,
            highlights: [1],
            statusMessage: `Bellman-Ford: Starting Pass 1 of V-1=4 passes. Initial dist: [1:0, 2:∞, 3:∞, 4:∞, 5:∞]`,
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data,
            highlights: [1, 3],
            edgeHighlights: ['1-3'],
            secondaryHighlights: [1, 3],
            statusMessage: `Pass 1: Relaxed edge (1-3) w=-2. Updated dist[3] = -2.`,
            pseudocode: code,
            activeLine: 3
        });
        frames.push({
            data,
            highlights: [3, 4],
            edgeHighlights: ['1-3', '3-4'],
            secondaryHighlights: [1, 3, 4],
            statusMessage: `Pass 2: Relaxed edge (3-4) w=3. Updated dist[4] = -2 + 3 = 1.`,
            pseudocode: code,
            activeLine: 3
        });
        frames.push({
            data,
            highlights: [4, 5],
            edgeHighlights: ['1-3', '3-4', '4-5'],
            secondaryHighlights: [1, 2, 3, 4, 5],
            statusMessage: `Bellman-Ford Complete! Final dist array after V-1 passes: [1:0, 2:4, 3:-2, 4:1, 5:0]. No negative cycles detected.`,
            pseudocode: code,
            activeLine: 4
        });
    } else if (algorithmId === 'floydwarshall') {
        return generateFloydWarshallFrames();
    } else { // A* Search
        const code = [
            `function AStarSearch(start, goal) {`,
            `  openSet.add(start); g[start]=0; f[start]=h(start);`,
            `  while (!openSet.isEmpty()) {`,
            `    curr = minF(openSet); if (curr == goal) return path;`,
            `    for (v in curr.neighbors) eval f(v) = g(v) + h(v);`,
            `  }`,
            `}`
        ];
        frames.push({
            data,
            highlights: [1],
            statusMessage: `A* Search: Goal Node = 5. Heuristic h(1)=5. Initial f(1) = g(1)+h(1) = 0+5 = 5.`,
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data,
            highlights: [1, 3],
            edgeHighlights: ['1-3'],
            secondaryHighlights: [1],
            statusMessage: `Evaluating Node 3: g(3)=2, h(3)=3 ➔ f(3) = 2+3 = 5. Selected Node 3 (Lowest f(n))!`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [3, 4],
            edgeHighlights: ['1-3', '3-4'],
            secondaryHighlights: [1, 3],
            statusMessage: `Evaluating Node 4: g(4)=3, h(4)=1 ➔ f(4) = 3+1 = 4. Selected Node 4 (Lowest f(n))!`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [4, 5],
            edgeHighlights: ['1-3', '3-4', '4-5'],
            secondaryHighlights: [1, 3, 4, 5],
            statusMessage: `A* Search Reached Goal Node 5! Optimal path: 1 ➔ 3 ➔ 4 ➔ 5 (Cost = 6).`,
            pseudocode: code,
            activeLine: 3
        });
    }
    return frames;
}

function generateFloydWarshallFrames() {
    const frames = [];
    const code = [
        `function FloydWarshall(V) {`,
        `  for k = 1 to V:`,
        `    for i = 1 to V:`,
        `      for j = 1 to V:`,
        `        D[i][j] = min(D[i][j], D[i][k] + D[k][j]);`,
        `}`
    ];

    const m0 = [
        [0, 3, '∞', 7],
        ['∞', 0, 1, '∞'],
        ['∞', '∞', 0, 2],
        ['∞', '∞', '∞', 0]
    ];
    frames.push({
        data: m0,
        statusMessage: `Floyd-Warshall Step 0: Initial Distance Matrix D⁽⁰⁾.`,
        pseudocode: code,
        activeLine: 0
    });

    const m1 = [
        [0, 3, '∞', 7],
        ['∞', 0, 1, '∞'],
        ['∞', '∞', 0, 2],
        ['∞', '∞', '∞', 0]
    ];
    frames.push({
        data: m1,
        highlights: ['0-1', '0-3'],
        statusMessage: `Pass k=1: Updating paths through intermediate vertex V1...`,
        pseudocode: code,
        activeLine: 4
    });

    const m2 = [
        [0, 3, 4, 7],
        ['∞', 0, 1, '∞'],
        ['∞', '∞', 0, 2],
        ['∞', '∞', '∞', 0]
    ];
    frames.push({
        data: m2,
        highlights: ['0-2'],
        statusMessage: `Pass k=2: Found shorter path D[1][3] via V2: 3 + 1 = 4!`,
        pseudocode: code,
        activeLine: 4
    });

    const m3 = [
        [0, 3, 4, 6],
        ['∞', 0, 1, 3],
        ['∞', '∞', 0, 2],
        ['∞', '∞', '∞', 0]
    ];
    frames.push({
        data: m3,
        highlights: ['0-3', '1-3'],
        statusMessage: `Pass k=3: Updated D[1][4] = min(7, 4+2) = 6 and D[2][4] = 1+2 = 3!`,
        pseudocode: code,
        activeLine: 4
    });

    return frames;
}

function generateOtherGraphFrames(algorithmId) {
    const frames = [];

    if (algorithmId === 'cycledetection') {
        const data = { nodes: [1, 2, 3, 4], edges: [[1, 2], [2, 3], [3, 4], [4, 2]], weights: {} };
        const code = [
            `function detectCycle(u) {`,
            `  visited.add(u); recStack.add(u);`,
            `  for (v in u.neighbors) {`,
            `    if (recStack.has(v)) return CYCLE_DETECTED;`,
            `    if (!visited.has(v) && detectCycle(v)) return true;`,
            `  }`,
            `  recStack.remove(u);`,
            `}`
        ];
        frames.push({
            data,
            highlights: [1],
            statusMessage: `Cycle Detection: DFS visit Node 1. Recursion Stack = {1}`,
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data,
            highlights: [1, 2, 3, 4],
            edgeHighlights: ['1-2', '2-3', '3-4'],
            secondaryHighlights: [1, 2, 3, 4],
            statusMessage: `DFS traversal path 1 ➔ 2 ➔ 3 ➔ 4. Current Recursion Stack = {1, 2, 3, 4}`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [4, 2],
            edgeHighlights: ['4-2'],
            secondaryHighlights: [2, 4],
            statusMessage: `WARNING: Edge (4 ➔ 2) points to Node 2 which is in active Recursion Stack! BACK-EDGE / CYCLE DETECTED!`,
            pseudocode: code,
            activeLine: 3
        });
    } else if (algorithmId === 'topologicalsort') {
        const data = { nodes: [1, 2, 3, 4, 5, 6], edges: [[1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6]], weights: {} };
        const code = [
            `function TopologicalSort(graph) {`,
            `  computeInDegrees(); q = nodesWithZeroInDegree();`,
            `  while (!q.isEmpty()) {`,
            `    u = q.dequeue(); topoOrder.add(u);`,
            `    for (v in u.neighbors) { inDegree[v]--; if (inDegree[v]==0) q.enqueue(v); }`,
            `  }`,
            `}`
        ];
        frames.push({
            data,
            statusMessage: `Topological Sort: In-Degrees computed: [1:0, 2:0, 3:2, 4:1, 5:1, 6:2]. Zero In-Degree Queue = [1, 2]`,
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data,
            highlights: [1, 2],
            secondaryHighlights: [1, 2],
            statusMessage: `Dequeued 1 and 2 ➔ Output order: [1, 2]. Reduced in-degree of Node 3 to 0. Added 3 to Queue.`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [3, 4, 5],
            secondaryHighlights: [1, 2, 3, 4, 5],
            statusMessage: `Dequeued 3 ➔ Output order: [1, 2, 3]. Added 4 and 5 to Queue.`,
            pseudocode: code,
            activeLine: 4
        });
        frames.push({
            data,
            highlights: [6],
            secondaryHighlights: [1, 2, 3, 4, 5, 6],
            statusMessage: `Topological Sort Complete! Final Topological Order: [1, 2, 3, 4, 5, 6]`,
            pseudocode: code,
            activeLine: 4
        });
    } else { // Connected Components
        const data = { nodes: [1, 2, 3, 4, 5, 6], edges: [[1, 2], [2, 3], [4, 5]], weights: {} };
        const code = [
            `function findConnectedComponents(graph) {`,
            `  for u in nodes:`,
            `    if (!visited.has(u)) { componentID++; DFS(u, componentID); }`,
            `}`
        ];
        frames.push({
            data,
            highlights: [1, 2, 3],
            edgeHighlights: ['1-2', '2-3'],
            secondaryHighlights: [1, 2, 3],
            statusMessage: `DFS Traversal from Node 1 ➔ Discovered Connected Component 1: {1, 2, 3}`,
            pseudocode: code,
            activeLine: 2
        });
        frames.push({
            data,
            highlights: [4, 5],
            edgeHighlights: ['4-5'],
            secondaryHighlights: [4, 5],
            statusMessage: `DFS Traversal from unvisited Node 4 ➔ Discovered Connected Component 2: {4, 5}`,
            pseudocode: code,
            activeLine: 2
        });
        frames.push({
            data,
            highlights: [6],
            secondaryHighlights: [6],
            statusMessage: `Isolated Node 6 ➔ Discovered Connected Component 3: {6}. Total Components = 3.`,
            pseudocode: code,
            activeLine: 2
        });
    }

    return frames;
}

function generateGraphFrames(operationId) {
    const frames = [];
    const data = {
        nodes: [1, 2, 3, 4, 5],
        edges: [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]],
        weights: { "1-2": 4, "2-3": 2, "3-4": 3, "4-5": 1, "1-5": 7 }
    };

    if (operationId === 'dijkstra') {
        const code = [
            `function dijkstra(graph, start) {`,
            `  dist[start] = 0;`,
            `  relaxEdges(u, v);`,
            `  return shortestPaths;`,
            `}`
        ];
        frames.push({
            data,
            highlights: [1],
            edgeHighlights: ["1-2"],
            statusMessage: "Starting Dijkstra's Shortest Path from Source Node 1.",
            pseudocode: code,
            activeLine: 1
        });
        frames.push({
            data,
            highlights: [1, 2],
            edgeHighlights: ["1-2", "2-3"],
            statusMessage: "Relaxing edge (1, 2) weight 4. Shortest path to 2 = 4.",
            pseudocode: code,
            activeLine: 2
        });
        frames.push({
            data,
            highlights: [1, 2, 3],
            edgeHighlights: ["1-2", "2-3", "3-4"],
            statusMessage: "Relaxing edge (2, 3) weight 2. Shortest path to 3 = 6.",
            pseudocode: code,
            activeLine: 2
        });
        frames.push({
            data,
            highlights: [1, 2, 3, 4, 5],
            edgeHighlights: ["1-2", "2-3", "3-4", "4-5"],
            statusMessage: "Dijkstra algorithm complete! Shortest paths computed.",
            pseudocode: code,
            activeLine: 3
        });
    } else {
        const code = [`function traverse(graph) {`, `  visited.add(node);`, `}`];
        data.nodes.forEach((n, i) => {
            frames.push({
                data,
                highlights: [n],
                secondaryHighlights: data.nodes.slice(0, i),
                statusMessage: `Visited Node ${n} in graph traversal.`,
                pseudocode: code,
                activeLine: 1
            });
        });
    }
    return frames;
}

// -------------------------------------------------------------
// AUTOMATED DEMO VIDEO SEQUENCE (STARTS FROM EMPTY)
// -------------------------------------------------------------

function generateAutoDemoVideoFrames(structureType) {
    const frames = [];
    const type = normalizeStructure(structureType);

    if (['bubblesort', 'selectionsort', 'insertionsort', 'mergesort', 'quicksort', 'heapsort', 'shellsort', 'countingsort', 'radixsort', 'bucketsort', 'sorting'].includes(type)) {
        const sortingAlg = (type === 'sorting' || type === 'array') ? 'quick' : type;
        return generateSortingFrames(sortingAlg);
    } else if (['linearsearch', 'binarysearch', 'search'].includes(type)) {
        const searchAlg = (type === 'search') ? 'binary' : type;
        return generateSearchFrames(searchAlg, '19');
    } else if (type === 'hashtable') {
        return generateHashTableFrames('insert', '42');
    } else if (type === 'maxheap' || type === 'heap') {
        return generateHeapFrames('insert', '42', 'max');
    } else if (type === 'minheap') {
        return generateHeapFrames('insert', '42', 'min');
    } else if (type === 'binomialheap') {
        return generateBinomialHeapFrames('insert', '25');
    } else if (type === 'fibonacciheap') {
        return generateFibonacciHeapFrames('insert', '30');
    } else if (['bfs', 'dfs'].includes(type)) {
        return generateGraphTraversalFrames(type);
    } else if (['prims', 'kruskals'].includes(type)) {
        return generateMSTFrames(type);
    } else if (['dijkstra', 'bellmanford', 'floydwarshall', 'astar'].includes(type)) {
        return generateShortestPathFrames(type);
    } else if (['cycledetection', 'topologicalsort', 'connectedcomponents'].includes(type)) {
        return generateOtherGraphFrames(type);
    } else if (['inorder', 'preorder', 'postorder', 'levelorder', 'treetraversal'].includes(type)) {
        return generateTreeFrames(type, '');
    } else if (['binarytree', 'bst', 'avltree', 'redblacktree', 'btree', 'bplustree', 'prefixtree', 'trie', 'suffixtree'].includes(type)) {
        const code = getAlgorithmPseudocode(type);

        frames.push({
            data: [],
            statusMessage: `🎬 Video Demo: Starting from EMPTY ${titleCase(type)}.`,
            pseudocode: code,
            activeLine: 0
        });

        frames.push({
            data: [50],
            highlights: [0],
            statusMessage: `Step 1: Inserted Root Node 50 into ${titleCase(type)}.`,
            pseudocode: code,
            activeLine: 1
        });

        frames.push({
            data: [50, 30],
            highlights: [1],
            statusMessage: `Step 2: Inserted Left Child Node 30 (30 < 50).`,
            pseudocode: code,
            activeLine: 2
        });

        frames.push({
            data: [50, 30, 70],
            highlights: [2],
            statusMessage: `Step 3: Inserted Right Child Node 70 (70 > 50).`,
            pseudocode: code,
            activeLine: 4
        });

        frames.push({
            data: [50, 30, 70, 20, 40, 60, 80],
            highlights: [3, 4, 5, 6],
            statusMessage: `Step 4: Tree fully constructed with leaves [20, 40, 60, 80].`,
            pseudocode: code,
            activeLine: 0
        });

        frames.push({
            data: [50, 30, 70, 20, 40, 60, 80],
            secondaryHighlights: [3, 1, 4, 0, 5, 2, 6],
            statusMessage: `Step 5: Executed Inorder Traversal -> [20, 30, 40, 50, 60, 70, 80]`,
            pseudocode: getAlgorithmPseudocode('inorder'),
            activeLine: 3
        });

        return frames;
    } else {
        const code = getAlgorithmPseudocode(type);

        frames.push({
            data: [],
            highlights: [],
            statusMessage: `🎬 Video Demo: Starting from EMPTY ${titleCase(type)}.`,
            pseudocode: code,
            activeLine: 0
        });

        frames.push({
            data: [10],
            highlights: [0],
            statusMessage: `Step 1: Inserted 10 into ${titleCase(type)}.`,
            pseudocode: code,
            activeLine: 1
        });

        frames.push({
            data: [10, 20],
            highlights: [1],
            statusMessage: `Step 2: Inserted 20 into ${titleCase(type)}.`,
            pseudocode: code,
            activeLine: 2
        });

        frames.push({
            data: [10, 20, 30],
            highlights: [2],
            statusMessage: `Step 3: Inserted 30 into ${titleCase(type)}.`,
            pseudocode: code,
            activeLine: 3
        });

        frames.push({
            data: [10, 20, 30, 40],
            highlights: [3],
            statusMessage: `Step 4: Inserted 40 into ${titleCase(type)}.`,
            pseudocode: code,
            activeLine: 4
        });

        frames.push({
            data: [10, 20, 30, 40],
            highlights: [],
            secondaryHighlights: [2],
            statusMessage: `Step 5: Searched for 30 -> Found at index 2!`,
            pseudocode: getAlgorithmPseudocode('linearsearch'),
            activeLine: 2
        });

        frames.push({
            data: [10, 20, 30],
            highlights: [2],
            statusMessage: `Step 6: Removed element from ${titleCase(type)}.`,
            pseudocode: code,
            activeLine: 1
        });

        frames.push({
            data: [10, 20, 30],
            highlights: [],
            secondaryHighlights: [0, 1, 2],
            statusMessage: `Video Demo Complete! Try custom operations below.`,
            pseudocode: code,
            activeLine: 0
        });

        return frames;
    }
}

function generateCustomGraphFrames(algorithmId, data, start, target) {
    const frames = [];
    const directed = [
        'dijkstra', 'bellmanford', 'floydwarshall', 'astar', 'cycledetection', 'topologicalsort'
    ].includes(algorithmId);
    const adjacency = new Map(data.nodes.map((node) => [node, []]));
    data.edges.forEach(([from, to]) => {
        const weight = data.weights[`${from}-${to}`] ?? data.weights[`${to}-${from}`] ?? 1;
        adjacency.get(from).push({ node: to, weight });
        if (!directed) adjacency.get(to).push({ node: from, weight });
    });
    const edgeKey = (from, to) => `${from}-${to}`;
    const graphFrame = (message, highlights = [], visited = [], highlightedEdges = [], code = [], activeLine = 0) => ({
        data,
        highlights,
        secondaryHighlights: visited,
        edgeHighlights: highlightedEdges,
        statusMessage: message,
        pseudocode: code,
        activeLine
    });

    if (algorithmId === 'floydwarshall') {
        const code = [
            'function FloydWarshall(distance) {',
            '  for (k = 0; k < V; k++)',
            '    for (i = 0; i < V; i++)',
            '      for (j = 0; j < V; j++)',
            '        distance[i][j] = min(distance[i][j], distance[i][k] + distance[k][j]);',
            '}'
        ];
        const distances = data.nodes.map((node, row) => data.nodes.map((other, column) => (
            row === column ? 0 : Infinity
        )));
        data.edges.forEach(([from, to]) => {
            const fromIndex = data.nodes.indexOf(from);
            const toIndex = data.nodes.indexOf(to);
            const weight = data.weights[`${from}-${to}`] ?? data.weights[`${to}-${from}`] ?? 1;
            distances[fromIndex][toIndex] = Math.min(distances[fromIndex][toIndex], weight);
            if (!directed) distances[toIndex][fromIndex] = Math.min(distances[toIndex][fromIndex], weight);
        });
        const displayMatrix = () => distances.map((row) => row.map((value) => (
            Number.isFinite(value) ? value : '∞'
        )));
        frames.push({
            data: displayMatrix(),
            statusMessage: 'Initial distance matrix built from the entered graph.',
            pseudocode: code,
            activeLine: 0
        });
        data.nodes.forEach((_, k) => {
            const changed = [];
            data.nodes.forEach((__, i) => {
                data.nodes.forEach((___, j) => {
                    const through = distances[i][k] + distances[k][j];
                    if (through < distances[i][j]) {
                        distances[i][j] = through;
                        changed.push(`${i}-${j}`);
                    }
                });
            });
            frames.push({
                data: displayMatrix(),
                highlights: changed,
                statusMessage: `Intermediate node ${data.nodes[k]}: updated ${changed.length} distance${changed.length === 1 ? '' : 's'}.`,
                pseudocode: code,
                activeLine: 4
            });
        });
        return frames;
    }

    if (['bfs', 'dfs'].includes(algorithmId)) {
        const code = algorithmId === 'bfs'
            ? ['function BFS(graph, start) {', '  queue.enqueue(start);', '  while (queue.length) {', '    node = queue.dequeue();', '    visit each unvisited neighbor;', '}']
            : ['function DFS(graph, node) {', '  visited.add(node);', '  for each unvisited neighbor:', '    DFS(neighbor);', '}'];
        const visited = new Set();
        const traversalEdges = [];
        frames.push(graphFrame(`${algorithmId.toUpperCase()} starts at node ${start}.`, [start], [], [], code, 1));

        if (algorithmId === 'bfs') {
            const queue = [start];
            visited.add(start);
            while (queue.length) {
                const current = queue.shift();
                for (const neighbor of adjacency.get(current)) {
                    if (visited.has(neighbor.node)) continue;
                    visited.add(neighbor.node);
                    queue.push(neighbor.node);
                    traversalEdges.push(edgeKey(current, neighbor.node));
                    frames.push(graphFrame(
                        `Visited ${neighbor.node} from ${current}; queue: [${queue.join(', ')}].`,
                        [neighbor.node],
                        [...visited],
                        [...traversalEdges],
                        code,
                        4
                    ));
                }
            }
        } else {
            const visit = (node) => {
                visited.add(node);
                for (const neighbor of adjacency.get(node)) {
                    if (visited.has(neighbor.node)) continue;
                    traversalEdges.push(edgeKey(node, neighbor.node));
                    frames.push(graphFrame(
                        `DFS follows ${node} → ${neighbor.node}.`,
                        [neighbor.node],
                        [...visited, neighbor.node],
                        [...traversalEdges],
                        code,
                        3
                    ));
                    visit(neighbor.node);
                }
            };
            visit(start);
        }
        frames.push(graphFrame(
            `${algorithmId.toUpperCase()} complete. Visited ${visited.size} of ${data.nodes.length} nodes from start ${start}.`,
            [],
            [...visited],
            traversalEdges,
            code,
            code.length - 1
        ));
        return frames;
    }

    if (algorithmId === 'prims' || algorithmId === 'kruskals') {
        const code = algorithmId === 'prims'
            ? ['function Prim(graph, start) {', '  add start to MST;', '  choose minimum edge crossing the cut;', '  repeat until all nodes are included;', '}']
            : ['function Kruskal(graph) {', '  sort edges by weight;', '  for each edge:', '    add it if it does not create a cycle;', '}'];
        const selectedEdges = [];
        let totalWeight = 0;
        if (algorithmId === 'prims') {
            const visited = new Set([start]);
            const roots = [start, ...data.nodes.filter((node) => node !== start)];
            frames.push(graphFrame(`Prim's algorithm starts at node ${start}.`, [start], [...visited], [], code, 1));
            while (visited.size < data.nodes.length) {
                let best = null;
                for (const node of visited) {
                    for (const neighbor of adjacency.get(node)) {
                        if (visited.has(neighbor.node)) continue;
                        if (!best || neighbor.weight < best.weight) {
                            best = { from: node, to: neighbor.node, weight: neighbor.weight };
                        }
                    }
                }
                if (!best) {
                    const root = roots.find((node) => !visited.has(node));
                    visited.add(root);
                    frames.push(graphFrame(
                        `Node ${root} is disconnected; starting another spanning-tree component.`,
                        [root],
                        [...visited],
                        selectedEdges,
                        code,
                        3
                    ));
                    continue;
                }
                visited.add(best.to);
                selectedEdges.push(edgeKey(best.from, best.to));
                totalWeight += best.weight;
                frames.push(graphFrame(
                    `Added edge ${best.from}–${best.to} (weight ${best.weight}); MST total = ${totalWeight}.`,
                    [best.from, best.to],
                    [...visited],
                    [...selectedEdges],
                    code,
                    2
                ));
            }
        } else {
            const parent = new Map(data.nodes.map((node) => [node, node]));
            const find = (node) => {
                let root = node;
                while (parent.get(root) !== root) root = parent.get(root);
                while (parent.get(node) !== node) {
                    const next = parent.get(node);
                    parent.set(node, root);
                    node = next;
                }
                return root;
            };
            const edges = data.edges.map(([from, to]) => ({
                from,
                to,
                weight: data.weights[`${from}-${to}`] ?? data.weights[`${to}-${from}`] ?? 1
            })).sort((a, b) => a.weight - b.weight);
            frames.push(graphFrame('Kruskal sorts the entered edges by weight.', [], [], [], code, 1));
            edges.forEach((edge) => {
                if (find(edge.from) === find(edge.to)) {
                    frames.push(graphFrame(
                        `Skipped edge ${edge.from}–${edge.to} (weight ${edge.weight}); it would create a cycle.`,
                        [edge.from, edge.to],
                        [],
                        selectedEdges,
                        code,
                        3
                    ));
                    return;
                }
                parent.set(find(edge.from), find(edge.to));
                selectedEdges.push(edgeKey(edge.from, edge.to));
                totalWeight += edge.weight;
                frames.push(graphFrame(
                    `Added edge ${edge.from}–${edge.to} (weight ${edge.weight}); MST total = ${totalWeight}.`,
                    [edge.from, edge.to],
                    [],
                    [...selectedEdges],
                    code,
                    3
                ));
            });
        }
        frames.push(graphFrame(
            `${algorithmId === 'prims' ? "Prim's" : "Kruskal's"} minimum spanning forest complete. Total weight = ${totalWeight}.`,
            [],
            algorithmId === 'prims' ? data.nodes : [],
            selectedEdges,
            code,
            code.length - 1
        ));
        return frames;
    }

    if (['dijkstra', 'bellmanford', 'astar'].includes(algorithmId)) {
        const code = algorithmId === 'bellmanford'
            ? ['function BellmanFord(graph, start) {', '  distance[start] = 0;', '  repeat V - 1 times:', '    relax every directed edge;', '}']
            : [`function ${algorithmId === 'astar' ? 'AStar' : 'Dijkstra'}(graph, start) {`, '  distance[start] = 0;', '  repeatedly choose the nearest unvisited node;', '  relax its outgoing edges;', '}'];
        const distances = new Map(data.nodes.map((node) => [node, Infinity]));
        const previous = new Map();
        const usedEdges = [];
        distances.set(start, 0);
        frames.push(graphFrame(
            `${algorithmId === 'astar' ? 'A* (using h(n)=0)' : algorithmId === 'bellmanford' ? 'Bellman-Ford' : 'Dijkstra'} starts at ${start}.`,
            [start],
            [],
            [],
            code,
            1
        ));

        if (algorithmId === 'bellmanford') {
            for (let pass = 1; pass < data.nodes.length; pass += 1) {
                let changed = false;
                for (const [from, to] of data.edges) {
                    const weight = data.weights[`${from}-${to}`] ?? data.weights[`${to}-${from}`] ?? 1;
                    if (!Number.isFinite(distances.get(from))) continue;
                    const candidate = distances.get(from) + weight;
                    if (candidate < distances.get(to)) {
                        distances.set(to, candidate);
                        previous.set(to, from);
                        usedEdges.push(edgeKey(from, to));
                        changed = true;
                        frames.push(graphFrame(
                            `Pass ${pass}: relaxed ${from}→${to}; distance to ${to} is ${candidate}.`,
                            [from, to],
                            [...distances].filter(([, distance]) => Number.isFinite(distance)).map(([node]) => node),
                            [...usedEdges],
                            code,
                            3
                        ));
                    }
                }
                if (!changed) break;
            }
            const negativeCycle = data.edges.some(([from, to]) => {
                const weight = data.weights[`${from}-${to}`] ?? data.weights[`${to}-${from}`] ?? 1;
                return Number.isFinite(distances.get(from)) && distances.get(from) + weight < distances.get(to);
            });
            if (negativeCycle) {
                frames.push(graphFrame('A reachable negative-weight cycle exists; shortest paths are undefined.', [], [], usedEdges, code, 4));
                return frames;
            }
        } else {
            const visited = new Set();
            while (visited.size < data.nodes.length) {
                const current = data.nodes
                    .filter((node) => !visited.has(node) && Number.isFinite(distances.get(node)))
                    .sort((a, b) => distances.get(a) - distances.get(b))[0];
                if (current === undefined) break;
                visited.add(current);
                if (algorithmId === 'astar' && current === target) break;
                for (const neighbor of adjacency.get(current)) {
                    const candidate = distances.get(current) + neighbor.weight;
                    if (candidate >= distances.get(neighbor.node)) continue;
                    distances.set(neighbor.node, candidate);
                    previous.set(neighbor.node, current);
                    usedEdges.push(edgeKey(current, neighbor.node));
                    frames.push(graphFrame(
                        `Relaxed ${current}→${neighbor.node}; distance to ${neighbor.node} is ${candidate}.`,
                        [current, neighbor.node],
                        [...visited],
                        [...usedEdges],
                        code,
                        3
                    ));
                }
            }
        }

        const reachable = [...distances].filter(([, distance]) => Number.isFinite(distance));
        if (pointToPointStructures.includes(algorithmId)) {
            const path = [];
            let node = target;
            while (node !== undefined) {
                path.unshift(node);
                if (node === start) break;
                node = previous.get(node);
            }
            const hasPath = path[0] === start && path[path.length - 1] === target;
            const pathEdges = hasPath ? path.slice(1).map((to, index) => edgeKey(path[index], to)) : [];
            frames.push(graphFrame(
                hasPath
                    ? `Shortest path ${start}→${target}: ${path.join(' → ')} (cost ${distances.get(target)}).`
                    : `No path exists from ${start} to ${target}.`,
                hasPath ? path : [target],
                reachable.map(([node]) => node),
                pathEdges,
                code,
                code.length - 1
            ));
        } else {
            frames.push(graphFrame(
                `Bellman-Ford complete. Distances from ${start}: ${data.nodes.map((node) => `${node}: ${Number.isFinite(distances.get(node)) ? distances.get(node) : '∞'}`).join(', ')}.`,
                [],
                reachable.map(([node]) => node),
                usedEdges,
                code,
                code.length - 1
            ));
        }
        return frames;
    }

    if (algorithmId === 'topologicalsort') {
        const code = ['function TopologicalSort(graph) {', '  queue = all zero-in-degree nodes;', '  while (queue is not empty) {', '    remove node and reduce neighbor degrees;', '}'];
        const inDegree = new Map(data.nodes.map((node) => [node, 0]));
        data.edges.forEach(([, to]) => inDegree.set(to, inDegree.get(to) + 1));
        const queue = data.nodes.filter((node) => inDegree.get(node) === 0);
        const order = [];
        frames.push(graphFrame(`Topological sort begins. Initial queue: [${queue.join(', ')}].`, queue, [], [], code, 1));
        while (queue.length) {
            const node = queue.shift();
            order.push(node);
            for (const neighbor of adjacency.get(node)) {
                inDegree.set(neighbor.node, inDegree.get(neighbor.node) - 1);
                if (inDegree.get(neighbor.node) === 0) queue.push(neighbor.node);
            }
            frames.push(graphFrame(
                `Added ${node} to the order. Current order: [${order.join(', ')}].`,
                [node],
                order,
                [],
                code,
                3
            ));
        }
        frames.push(graphFrame(
            order.length === data.nodes.length
                ? `Topological order: [${order.join(', ')}].`
                : 'The graph contains a directed cycle; no topological ordering exists.',
            [],
            order,
            [],
            code,
            code.length - 1
        ));
        return frames;
    }

    if (algorithmId === 'cycledetection') {
        const code = ['function hasCycle(node) {', '  mark node as active;', '  for each outgoing neighbor:', '    active neighbor means cycle;', '  mark node complete;', '}'];
        const color = new Map(data.nodes.map((node) => [node, 0]));
        const pathEdges = [];
        let cycleEdge = null;
        const visit = (node) => {
            color.set(node, 1);
            for (const neighbor of adjacency.get(node)) {
                if (color.get(neighbor.node) === 1) {
                    cycleEdge = [node, neighbor.node];
                    return true;
                }
                if (color.get(neighbor.node) === 0) {
                    pathEdges.push(edgeKey(node, neighbor.node));
                    if (visit(neighbor.node)) return true;
                }
            }
            color.set(node, 2);
            return false;
        };
        frames.push(graphFrame('Searching for a directed back edge with DFS.', [], [], [], code, 1));
        const found = data.nodes.some((node) => color.get(node) === 0 && visit(node));
        frames.push(graphFrame(
            found ? `Cycle detected at edge ${cycleEdge[0]}→${cycleEdge[1]}.` : 'No directed cycle found.',
            cycleEdge || [],
            [...color].filter(([, value]) => value === 2).map(([node]) => node),
            found ? [...pathEdges, edgeKey(cycleEdge[0], cycleEdge[1])] : pathEdges,
            code,
            found ? 3 : 5
        ));
        return frames;
    }

    if (algorithmId === 'connectedcomponents') {
        const code = ['function components(graph) {', '  for each unvisited node:', '    run DFS and collect its component;', '}'];
        const visited = new Set();
        const components = [];
        data.nodes.forEach((root) => {
            if (visited.has(root)) return;
            const component = [];
            const stack = [root];
            visited.add(root);
            while (stack.length) {
                const node = stack.pop();
                component.push(node);
                adjacency.get(node).forEach(({ node: neighbor }) => {
                    if (visited.has(neighbor)) return;
                    visited.add(neighbor);
                    stack.push(neighbor);
                });
            }
            components.push(component);
            frames.push(graphFrame(
                `Found component ${components.length}: {${component.join(', ')}}.`,
                component,
                [...visited],
                [],
                code,
                2
            ));
        });
        frames.push(graphFrame(`Found ${components.length} connected component${components.length === 1 ? '' : 's'}.`, [], [...visited], [], code, 3));
        return frames;
    }

    return frames;
}

function applyOperation(operationId) {
    const val = valueInput.value.trim();
    const pos = positionInput.value.trim();
    let frames = [];

    const curr = state.current;

    if (sortingStructures.includes(curr)) {
        const parsedValues = parseIntegerList(valuesInput.value, false, 30);
        if (parsedValues.error) {
            animationPlayer.pause();
            updateStatus(`Invalid input: ${parsedValues.error}`);
            return;
        }
        const sortingAlg = curr === 'sorting' ? operationId : curr;
        if (sortingAlg === 'radixsort' && parsedValues.values.some((value) => value < 0)) {
            animationPlayer.pause();
            updateStatus('Invalid input: Radix Sort accepts only non-negative integers.');
            return;
        }
        if (sortingAlg === 'countingsort' && parsedValues.values.some((value) => value < 0 || value > 1000)) {
            animationPlayer.pause();
            updateStatus('Invalid input: Counting Sort accepts integers from 0 to 1,000.');
            return;
        }
        state.data = parsedValues.values;
        frames = generateSortingFrames(sortingAlg);
    } else if (treeTraversalStructures.includes(curr)) {
        const parsedValues = parseIntegerList(valuesInput.value, true, 63);
        if (parsedValues.error) {
            animationPlayer.pause();
            updateStatus(`Invalid input: ${parsedValues.error}`);
            return;
        }
        if (parsedValues.values[0] === null) {
            animationPlayer.pause();
            updateStatus('Invalid input: the root node cannot be null.');
            return;
        }
        state.data = parsedValues.values;
        frames = generateTreeFrames(operationId, val);
    } else if (graphStructures.includes(curr)) {
        const algorithmId = ['graph', 'graphalgo'].includes(curr) ? operationId : curr;
        const graphInput = readGraphInput(algorithmId);
        if (graphInput.error) {
            animationPlayer.pause();
            updateStatus(`Invalid input: ${graphInput.error}`);
            return;
        }
        state.data = graphInput.data;
        frames = generateCustomGraphFrames(
            algorithmId,
            graphInput.data,
            graphInput.start,
            graphInput.target
        );
    } else if (['linearsearch', 'binarysearch', 'search'].includes(curr)) {
        const searchAlg = (curr === 'search') ? operationId : curr;
        frames = generateSearchFrames(searchAlg, val);
    } else if (curr === 'hashtable') {
        frames = generateHashTableFrames(operationId, val);
    } else if (curr === 'maxheap' || curr === 'heap') {
        frames = generateHeapFrames(operationId, val, 'max');
    } else if (curr === 'minheap') {
        frames = generateHeapFrames(operationId, val, 'min');
    } else if (curr === 'binomialheap') {
        frames = generateBinomialHeapFrames(operationId, val);
    } else if (curr === 'fibonacciheap') {
        frames = generateFibonacciHeapFrames(operationId, val);
    } else if (['binarytree', 'bst', 'avltree', 'redblacktree', 'btree', 'bplustree', 'prefixtree', 'trie', 'suffixtree', 'inorder', 'preorder', 'postorder', 'levelorder', 'treetraversal'].includes(curr)) {
        frames = generateTreeFrames(operationId, val);
    } else {
        frames = generateArrayFrames(operationId, val, pos);
    }

    if (frames.length > 0) {
        animationPlayer.setFrames(frames, true);
        updateStatus(`Running operation ${operationId.toUpperCase()} video animation...`);
    }
}

function runAutoDemoVideo(autoPlay = true) {
    const frames = generateAutoDemoVideoFrames(state.current);
    if (frames.length > 0) {
        animationPlayer.setFrames(frames, autoPlay);
        if (autoPlay) {
            updateStatus(`🎬 Playing Example Video Demo for ${titleCase(state.current)}.`);
        }
    }
}

// Attach Media Control Listeners
btnPlayPause?.addEventListener('click', () => animationPlayer.togglePlay());
btnStepBack?.addEventListener('click', () => animationPlayer.stepBackward());
btnStepForward?.addEventListener('click', () => animationPlayer.stepForward());
btnReset?.addEventListener('click', () => animationPlayer.reset());
btnAutoDemo?.addEventListener('click', () => runAutoDemoVideo(true));

timelineScrubber?.addEventListener('input', (e) => {
    animationPlayer.seekTo(parseInt(e.target.value, 10));
});

speedSelect?.addEventListener('change', (e) => {
    animationPlayer.setSpeed(e.target.value);
});

structureSelect?.addEventListener('change', (event) => {
    setStructure(event.target.value);
    const safeStructure = normalizeStructure(event.target.value);
    window.history.replaceState({}, '', `/visualization/${safeStructure}/`);
});

window.addEventListener('DOMContentLoaded', () => {
    setupNarrationControls();
    aiInsightManager.init();
    const initial = normalizeStructure(window.initialDsType || 'array');
    setStructure(initial);
});
