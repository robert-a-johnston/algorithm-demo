(this["webpackJsonpalgorithm-demo"]=this["webpackJsonpalgorithm-demo"]||[]).push([[0],{45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},54:function(e,t,i){},55:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){},58:function(e,t,i){},59:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},62:function(e,t,i){},63:function(e,t,i){},64:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i(17),r=i.n(n),c=(i(45),i(3)),a=(i(46),i(40)),o=i(38),l=i(25),d=(i(47),i(0)),h=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(o.a.Brand,{children:Object(d.jsx)("h1",{children:"Algorithm Fun"})}),Object(d.jsxs)(a.a,{children:[Object(d.jsx)(l.b,{className:"nav-link",to:"/",children:"Home"}),Object(d.jsx)(l.b,{className:"nav-link",to:"/sort",children:"Sorter"}),Object(d.jsx)(l.b,{className:"nav-link",to:"/path",children:"PathFinder"})]})]})})},u=i(16),j=i(6);function b(e){var t=Object(u.a)(e),i=t.length,s=[];return f(t,Array(i),0,i-1,s),s}function f(e,t,i,s,n){if(!(s<=i)){var r=i+Math.floor((s-i)/2);f(e,t,i,r,n),f(e,t,r+1,s,n),function(e,t,i,s,n,r){for(var c=i;c<=n;c++)t[c]=e[c];for(var a=i,o=s+1,l=i;l<=n;l++)a>s?(r.push([[o],!1]),r.push([[l,t[o]],!0]),e[l]=t[o++]):o>n?(r.push([[a],!1]),r.push([[l,t[a]],!0]),e[l]=t[a++]):t[o]<t[a]?(r.push([[a,o],!1]),r.push([[l,t[o]],!0]),e[l]=t[o++]):(r.push([[a,o],!1]),r.push([[l,t[a]],!0]),e[l]=t[a++])}(e,t,i,r,s,n)}}function O(e){var t=Object(u.a)(e),i=[];return m(t,0,t.length-1,i),i}function m(e,t,i,s){if(!(i<=t)){var n=function(e,t,i,s){var n=t,r=i+1,c=e[t];for(;;){for(;e[++n]<=c&&n!==i;)s.push([[n],!1]);for(;e[--r]>=c&&r!==t;)s.push([[r],!1]);if(r<=n)break;s.push([[n,e[r]],!0]),s.push([[r,e[n]],!0]),v(e,n,r)}return s.push([[t,e[r]],!0]),s.push([[r,e[t]],!0]),v(e,t,r),r}(e,t,i,s);m(e,t,n,s),m(e,n+1,i,s)}}function v(e,t,i){var s=e[t];e[t]=e[i],e[i]=s}function p(e){var t=[];return function(e,t){var i,s,n=e.length,r=!1;for(i=0;i<n;i++){for(r=!1,s=0;s<n;s++)e[s]>e[s+1]&&(t.push([[s,e[s+1]],!0]),t.push([[s+1,e[s]],!0]),x(e,s,s+1),r=!0),t.push([[s],!1]);if(!r)break}}(Object(u.a)(e),t),t}function x(e,t,i){var s=e[t];e[t]=e[i],e[i]=s}function g(e,t){!function(e,t){for(var i=e.current.children,s=0;s<t.length;s++)i[s].style.backgroundColor=""}(e,t);for(var i=[],s=5,n=0;n<50;n++)i.push(s),s++;return function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[i],e[i]=s}}(i),i}i(54);var N=i.p+"static/media/quickSortAlgo.59d510c4.JPG";function S(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"QuickSort Algorithm"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"algo-pic",children:Object(d.jsx)("img",{className:"quicksort-img",src:N,alt:"Quick Sort Algorithm"})}),Object(d.jsxs)("div",{className:"algo-info",children:[Object(d.jsx)("h3",{children:"Time/Space Complexity"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Average Time: O(n log(n))"}),Object(d.jsx)("li",{children:"Worst Time: O(n^2)"}),Object(d.jsx)("li",{children:"Space: O(log(n))"})]}),Object(d.jsx)("h4",{children:"Steps for QuickSort"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Select pivot.  Can select any element(first/last/middle)"}),Object(d.jsx)("li",{children:"Start left pointer at first element and right pointer at last element."}),Object(d.jsx)("li",{children:"Compare left pointer element with pivot element."}),Object(d.jsx)("li",{children:"While left pointer element is less than pivot shift left pointer right one element."}),Object(d.jsx)("li",{children:"While right pointer element is greater than pivot shift right pointer left one element."}),Object(d.jsx)("li",{children:"Check if left pointer element is greater than right pointer element."}),Object(d.jsx)("li",{children:"If left element is less than right pointer element swap left and right pointer values."}),Object(d.jsx)("li",{children:"Add one to left pointer and subtract one from right pointer"}),Object(d.jsx)("li",{children:"If the index of the left pointer is less than the index of the right pointer repeat the process. If not return the index of the left pointer."})]})]})]})]})}i(55);var y=i.p+"static/media/mergeSortAlgo.b0ceeec9.JPG";function w(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"MergeSort Algorithm"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"algo-pic",children:Object(d.jsx)("img",{className:"merge-sort-img",src:y,alt:"Merge Sort Algorithm"})}),Object(d.jsxs)("div",{className:"algo-info",children:[Object(d.jsx)("h3",{children:"Time/Space Complexity"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Average Time: O(n log(n))"}),Object(d.jsx)("li",{children:"Worst Time: O(n log(n))"}),Object(d.jsx)("li",{children:"Space: O(n)"})]}),Object(d.jsx)("h4",{children:"Steps for MergeSort"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Split given array in half."}),Object(d.jsx)("li",{children:"Recursively divide sub-arrays in half until you are left with an array with a single value."}),Object(d.jsx)("li",{children:"Merge single value sub-arrays so that they are sorted."}),Object(d.jsx)("li",{children:"Repeat merging sub-arrays and sorting until all values are in sorted array."})]})]})]})]})}i(56);var k=i.p+"static/media/bubbleSortAlgo.8146cbc2.JPG";function I(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"BubbleSort Algorithm"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"algo-pic",children:Object(d.jsx)("img",{className:"bubble-sort-img",src:k,alt:"Bubble Sort Algorithm"})}),Object(d.jsxs)("div",{className:"algo-info",children:[Object(d.jsx)("h3",{children:"Time/Space Complexity"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Average Time: O(n^2)"}),Object(d.jsx)("li",{children:"Worst Time: O(n^2)"}),Object(d.jsx)("li",{children:"Space: O(1)"})]}),Object(d.jsx)("h4",{children:"Steps for BubbleSort"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Start at first item in unsorted array."}),Object(d.jsx)("li",{children:"Check if the next item is less than first item."}),Object(d.jsx)("li",{children:"If the next item is less than the first swap items."}),Object(d.jsx)("li",{children:"Continue checking if next value is greater or less than and switching when value is less than."}),Object(d.jsx)("li",{children:"Continue iterating through all of the items in the array until sorted."})]})]})]})]})}i(57);var C=15,_="green";function E(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),i=t[0],n=t[1],r=Object(s.useState)(""),c=Object(j.a)(r,2),a=c[0],o=c[1],l=Object(s.useRef)(null),h=Object(s.useState)(!1),f=Object(j.a)(h,2),m=f[0],v=f[1],x=Object(s.useState)(!1),N=Object(j.a)(x,2),y=N[0],k=N[1];function E(e){e.forEach((function(e,t){var i=Object(j.a)(e,2),s=i[0],r=i[1];setTimeout((function(){if(r)n((function(e){var t=Object(j.a)(s,2),i=t[0],n=t[1],r=Object(u.a)(e);return r[i]=n,r}));else if(2===s.length){var e=Object(j.a)(s,2),t=e[0],i=e[1];T(t),T(i)}else{T(Object(j.a)(s,1)[0])}}),t*C)})),setTimeout((function(){!function(){var e=l.current.children;console.log(e);for(var t=function(t){var i=e[t].style;setTimeout((function(){return i.backgroundColor=_}),t*C)},i=0;i<e.length-1;i++)t(i);setTimeout((function(){k(!1)}),e.length*C)}()}),e.length*C)}function T(e){var t=l.current.children[e].style;setTimeout((function(){t.backgroundColor="red"}),C),setTimeout((function(){t.backgroundColor=""}),30)}return Object(s.useEffect)((function(){return n(g(l,i))}),[]),Object(d.jsxs)("div",{className:"display-container",children:[Object(d.jsxs)("div",{className:"button-container",children:[Object(d.jsx)("button",{className:"button",id:"create-array",onClick:function(){return o(""),v(!1),n(g(l,i)),void k(!1)},disabled:y,children:"Create/Reset Array"}),Object(d.jsx)("button",{className:"button",id:"merge-sort",onClick:function(){v(!0),k(!0),o(w),E(b(i))},disabled:m,children:"MergeSort"}),Object(d.jsx)("button",{className:"button",id:"quick-sort",onClick:function(){v(!0),k(!0),o(S),E(O(i))},disabled:m,children:"QuickSort"}),Object(d.jsx)("button",{className:"button",id:"bubble-sort",onClick:function(){v(!0),k(!0),o(I),E(p(i))},disabled:m,children:"BubbleSort"})]}),Object(d.jsxs)("div",{className:"array-bar-container",ref:l,children:[i.map((function(e,t){return Object(d.jsx)("div",{className:"array-bar",style:{height:"".concat(e,"Vmin"),width:"".concat(2,"vw"),color:"white"},children:e-5+1},t)})),Object(d.jsx)("div",{className:"array-bar-topper",style:{height:"55vmin",width:"".concat(2,"vw")}})]}),Object(d.jsx)("code",{className:"info",children:a})]})}var T=i(2),R=i(9),F=i(20),W=i(21),D=i(29),A=i(28),M=i(27),V=(i(58),function(e){Object(A.a)(i,e);var t=Object(M.a)(i);function i(){return Object(F.a)(this,i),t.apply(this,arguments)}return Object(W.a)(i,[{key:"render",value:function(){var e=this.props,t=e.col,i=e.isFinish,s=e.isStart,n=e.isWall,r=e.onMouseDown,c=e.onMouseEnter,a=e.onMouseUp,o=e.row,l=i?"node-finish":s?"node-start":n?"node-wall":"";return Object(d.jsx)("td",{id:"node-".concat(o,"-").concat(t),className:"node ".concat(l),onMouseDown:function(){return r(o,t)},onMouseEnter:function(){return c(o,t)},onMouseUp:function(){return a()}})}}]),i}(s.Component));function B(e,t,i){var s=[];t.distance=0;for(var n=function(e){var t,i=[],s=Object(R.a)(e);try{for(s.s();!(t=s.n()).done;){var n,r=t.value,c=Object(R.a)(r);try{for(c.s();!(n=c.n()).done;){var a=n.value;i.push(a)}}catch(o){c.e(o)}finally{c.f()}}}catch(o){s.e(o)}finally{s.f()}return i}(e);n.length;){P(n);var r=n.shift();if(!r.isWall){if(r.distance===1/0)return s;if(r.isVisited=!0,s.push(r),r===i)return s;q(r,e)}}}function P(e){e.sort((function(e,t){return e.distance-t.distance}))}function q(e,t){var i,s=function(e,t){var i=[],s=e.col,n=e.row;n>0&&i.push(t[n-1][s]);n<t.length-1&&i.push(t[n+1][s]);s>0&&i.push(t[n][s-1]);s<t[0].length-1&&i.push(t[n][s+1]);return i.filter((function(e){return!e.isVisited}))}(e,t),n=Object(R.a)(s);try{for(n.s();!(i=n.n()).done;){var r=i.value;r.distance=e.distance+1,r.previousNode=e}}catch(c){n.e(c)}finally{n.f()}}function L(e,t,i){console.log("in astar");var s=[];t.distance=0;for(var n=function(e){var t,i=[],s=Object(R.a)(e);try{for(s.s();!(t=s.n()).done;){var n,r=t.value,c=Object(R.a)(r);try{for(c.s();!(n=c.n()).done;){var a=n.value;console.log(a),i.push(a)}}catch(o){c.e(o)}finally{c.f()}}}catch(o){s.e(o)}finally{s.f()}return i}(e);n.length;){G(n);var r=n.shift();if(!r.isWall){if(r.distance===1/0)return s;if(r.isVisited=!0,s.push(r),r===i)return s;H(r,e)}}}function G(e){e.sort((function(e,t){return e.distance-t.distance}))}function H(e,t){var i,s=function(e,t){var i=[],s=e.col,n=e.row;n>0&&i.push(t[n-1][s]);n<t.length-1&&i.push(t[n+1][s]);s>0&&i.push(t[n][s-1]);s<t[0].length-1&&i.push(t[n][s+1]);return i.filter((function(e){return!e.isVisited}))}(e,t),n=Object(R.a)(s);try{for(n.s();!(i=n.n()).done;){var r=i.value;r.distance=e.distance+1+r.distanceToFinishNode,r.previousNode=e}}catch(c){n.e(c)}finally{n.f()}}i(59);function U(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",target:"_blank",rel:"noreferrer",children:"Dijkstra's Algorithm"})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"algo-info",children:[Object(d.jsx)("h3",{children:"Time/Space Complexity"}),Object(d.jsx)("p",{children:"* Depends on Implementation(V = vertices E = edges)"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Average Time: O(|E| log|V|))"}),Object(d.jsx)("li",{children:"Worst Time: O(|V|^2)"}),Object(d.jsx)("li",{children:"Worst Space: O(|V| + |E|)"})]}),Object(d.jsx)("h3",{children:"Requirements"}),Object(d.jsx)("ul",{children:Object(d.jsx)("li",{children:"Can only have positive weights."})}),Object(d.jsx)("h4",{children:"Steps for Dijkstra's Algorithm"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Set all vertices distances = infinity except for the source vertex, set the source distance = 0."}),Object(d.jsx)("li",{children:"Push the source vertex in a min-priority queue in the form (distance , vertex), as the comparison in the min-priority queue will be according to vertices distances."}),Object(d.jsx)("li",{children:"Pop the vertex with the minimum distance from the priority queue (at first the popped vertex = source)."}),Object(d.jsx)("li",{children:'Update the distances of the connected vertices to the popped vertex in case of "current vertex distance + edge weight less than next vertex distance", then push the vertex with the new distance to the priority queue.'}),Object(d.jsx)("li",{children:"If the popped vertex is visited before, just continue without using it."}),Object(d.jsx)("li",{children:"Apply the same algorithm again until the priority queue is empty."})]})]})})]})}i(60);function z(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/A*_search_algorithm",target:"_blank",rel:"noreferrer",children:"A * Algorithm"})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"algo-info",children:[Object(d.jsx)("h3",{children:"Time/Space Complexity"}),Object(d.jsx)("p",{children:"* Depends on Implementation.  E = # of edges, V = # of vertices"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Worst Time: O(E)"}),Object(d.jsx)("li",{children:"Worst Space: O(V)"})]}),Object(d.jsx)("h4",{children:"Steps for A * Algorithm"}),Object(d.jsx)("p",{children:"* Given a grid with many obstacles and a starting point and ending point "}),Object(d.jsx)("p",{children:"* g = the movement cost to move from the starting point to a given square on the grid, following the path generated to get there."}),Object(d.jsx)("p",{children:"* h = the estimated movement cost to move from a given square on the grid to the final destination.  (Sometimes referred to as the heuristic or smart guess.)"}),Object(d.jsx)("p",{children:"* f = the sum of g and h"}),Object(d.jsxs)("ol",{type:"1",children:[Object(d.jsx)("li",{children:"Create two lists named open and closed."}),Object(d.jsx)("li",{children:"Put the starting node on the open list(can leave its f at 0)"}),Object(d.jsx)("li",{children:"While the open list is not empty"}),Object(d.jsxs)("ol",{className:"while",type:"a",children:[Object(d.jsx)("li",{children:"Find the node with the least f on the open list, q."}),Object(d.jsx)("li",{children:"Generate q's 8 successors and set their parents to q."}),Object(d.jsx)("li",{children:"For each successor:"}),Object(d.jsxs)("ol",{className:"for-each",type:"i",children:[Object(d.jsxs)("li",{children:["If the successor is the goal, stop the search successor.g = q.g + distance between successor and q",Object(d.jsx)("br",{}),"successor.h = distance from goal to successors",Object(d.jsx)("br",{}),"successor.f = successor.g + successor.",Object(d.jsx)("br",{})]}),Object(d.jsx)("li",{children:"If a node with the same position as successor is in the OPEN list which has a lower f than successor, skip this successor"}),Object(d.jsx)("li",{children:"If a node with the same position as successor is in the CLOSED list which has a lower f than successor, skip this successor.  Otherwise, add the node to the open list."}),Object(d.jsx)("li",{children:"End for loop."})]}),Object(d.jsx)("li",{children:"Push q on the closed list"}),Object(d.jsx)("li",{children:"End while loop."})]})]})]})})]})}i(61);function J(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/Breadth-first_search",target:"_blank",rel:"noreferrer",children:"Breath First Search Algorithm"})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"algo-info",children:[Object(d.jsx)("h3",{children:"Time/Space Complexity"}),Object(d.jsx)("p",{children:"* V = vertices"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Worst Time: O(V)"}),Object(d.jsx)("li",{children:"Worst Space: O(V)"})]}),Object(d.jsx)("h4",{children:"Steps for Breath First Search"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Given a graph and start node"}),Object(d.jsx)("li",{children:"Create QUEUE for vertices visited"}),Object(d.jsx)("li",{children:"Put first node(start node) in visited queue."}),Object(d.jsx)("li",{children:"While queue is not empty."}),Object(d.jsxs)("ol",{type:"a",children:[Object(d.jsx)("li",{children:"Select unvisited adjacent node from first item"}),Object(d.jsx)("li",{children:"Mark next node as visited by adding it to the queue."}),Object(d.jsx)("li",{children:"Repeat above steps until no unvisited adjacent nodes to start node."}),Object(d.jsx)("li",{children:"Remove first node visited from first node from queue."}),Object(d.jsx)("li",{children:"Repeat above steps with adjacent node becoming start node"})]}),Object(d.jsx)("li",{children:"End while loop."})]})]})})]})}i(62);function Q(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/Depth-first_search#:~:text=Depth%2Dfirst%20search%20(DFS),along%20each%20branch%20before%20backtracking.",target:"_blank",rel:"noreferrer",children:"Depth First Search Algorithm"})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"algo-info",children:[Object(d.jsx)("h3",{children:"Time/Space Complexity"}),Object(d.jsx)("p",{children:"* V = vertices"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Worst Time: O(V)"}),Object(d.jsx)("li",{children:"Worst Space: O(V)"})]}),Object(d.jsx)("h4",{children:"Steps for Depth First Search"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Given a graph and start node and end node."}),Object(d.jsx)("li",{children:"Create STACK for vertices visited"}),Object(d.jsx)("li",{children:"Put first node(start node) in visited stack."}),Object(d.jsx)("li",{children:"While stack is not empty."}),Object(d.jsxs)("ol",{type:"a",children:[Object(d.jsx)("li",{children:"Select unvisited adjacent node from first item"}),Object(d.jsx)("li",{children:"Mark node as visited by adding it to the stack."}),Object(d.jsx)("li",{children:"Repeat above steps until you reach a node has no unvisited child nodes."}),Object(d.jsx)("li",{children:"Pop node  with no unvisited child nodes from stack"}),Object(d.jsx)("li",{children:"Repeat above with each node in stack, until all nodes are visited."}),Object(d.jsx)("li",{children:" When find end node return stack.  This is the path for nodes traveled to get to end node."})]}),Object(d.jsx)("li",{children:"End while loop."}),Object(d.jsx)("li",{children:"If you never find the end node return no way to get to node."})]})]})})]})}i(63);var Y=function(e){Object(A.a)(i,e);var t=Object(M.a)(i);function i(){var e;return Object(F.a)(this,i),(e=t.call(this)).getInitialGrid=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.ROW_COUNT,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.COLUMN_COUNT,s=[],n=0;n<t;n++){for(var r=[],c=0;c<i;c++)r.push(e.createNode(n,c));s.push(r)}return s},e.createNode=function(t,i){return{row:t,col:i,isStart:t===e.state.START_NODE_ROW&&i===e.state.START_NODE_COL,isFinish:t===e.state.FINISH_NODE_ROW&&i===e.state.FINISH_NODE_COL,distance:1/0,distanceToFinishNode:Math.abs(e.state.FINISH_NODE_ROW-t)+Math.abs(e.state.FINISH_NODE_COL-i),isVisited:!1,isWall:!1,previousNode:null,isNode:!0}},e.state={grid:[],START_NODE_ROW:1,FINISH_NODE_ROW:12,START_NODE_COL:2,FINISH_NODE_COL:12,mouseIsPressed:!1,ROW_COUNT:15,COLUMN_COUNT:15,isRunning:!1,isStartNode:!1,isFinishNode:!1,isWallNode:!1,currRow:0,currCol:0,info:""},e.handleMouseDown=e.handleMouseDown.bind(Object(D.a)(e)),e.handleMouseLeave=e.handleMouseLeave.bind(Object(D.a)(e)),e.toggleIsRunning=e.toggleIsRunning.bind(Object(D.a)(e)),e}return Object(W.a)(i,[{key:"componentDidMount",value:function(){var e=this.getInitialGrid();this.setState({grid:e})}},{key:"toggleIsRunning",value:function(){this.setState({isRunning:!this.state.isRunning})}},{key:"handleMouseDown",value:function(e,t){if(!this.state.isRunning)if(this.isGridClear())if("node node-start"===document.getElementById("node-".concat(e,"-").concat(t)).className)this.setState({mouseIsPressed:!0,isStartNode:!0,currRow:e,currCol:t});else if("node node-finish"===document.getElementById("node-".concat(e,"-").concat(t)).className)this.setState({mouseIsPressed:!0,isFinishNode:!0,currRow:e,currCol:t});else{var i=K(this.state.grid,e,t);this.setState({grid:i,mouseIsPressed:!0,isWallNode:!0,currRow:e,currCol:t})}else this.clearGrid()}},{key:"isGridClear",value:function(){var e,t=Object(R.a)(this.state.grid);try{for(t.s();!(e=t.n()).done;){var i,s=e.value,n=Object(R.a)(s);try{for(n.s();!(i=n.n()).done;){var r=i.value,c=document.getElementById("node-".concat(r.row,"-").concat(r.col)).className;if("node node-visited"===c||"node node-shortest-path"===c)return!1}}catch(a){n.e(a)}finally{n.f()}}}catch(a){t.e(a)}finally{t.f()}return!0}},{key:"handleMouseEnter",value:function(e,t){if(!this.state.isRunning&&this.state.mouseIsPressed){var i=document.getElementById("node-".concat(e,"-").concat(t)).className;if(this.state.isStartNode){if("node node-wall"!==i)this.state.grid[this.state.currRow][this.state.currCol].isStart=!1,document.getElementById("node-".concat(this.state.currRow,"-").concat(this.state.currCol)).className="node",this.setState({currRow:e,currCol:t}),this.state.grid[e][t].isStart=!0,document.getElementById("node-".concat(e,"-").concat(t)).className="node node-start";this.setState({START_NODE_ROW:e,START_NODE_COL:t})}else if(this.state.isFinishNode){if("node node-wall"!==i)this.state.grid[this.state.currRow][this.state.currCol].isFinish=!1,document.getElementById("node-".concat(this.state.currRow,"-").concat(this.state.currCol)).className="node",this.setState({currRow:e,currCol:t}),this.state.grid[e][t].isFinish=!0,document.getElementById("node-".concat(e,"-").concat(t)).className="node node-finish";this.setState({FINISH_NODE_ROW:e,FINISH_NODE_COL:t})}else if(this.state.isWallNode){var s=K(this.state.grid,e,t);this.setState({grid:s})}}}},{key:"handleMouseUp",value:function(e,t){if(!this.state.isRunning){if(this.setState({mouseIsPressed:!1}),this.state.isStartNode){var i=!this.state.isStartNode;this.setState({isStartNode:i,START_NODE_ROW:e,START_NODE_COL:t})}else if(this.state.isFinishNode){var s=!this.state.isFinishNode;this.setState({isFinishNode:s,FINISH_NODE_ROW:e,FINISH_NODE_COL:t})}this.getInitialGrid()}}},{key:"handleMouseLeave",value:function(){if(this.state.isStartNode){var e=!this.state.isStartNode;this.setState({isStartNode:e,mouseIsPressed:!1})}else if(this.state.isFinishNode){var t=!this.state.isFinishNode;this.setState({isFinishNode:t,mouseIsPressed:!1})}else if(this.state.isWallNode){var i=!this.state.isWallNode;this.setState({isWallNode:i,mouseIsPressed:!1}),this.getInitialGrid()}}},{key:"clearGrid",value:function(){if(!this.state.isRunning){this.setState({info:""});var e,t=this.state.grid.slice(),i=Object(R.a)(t);try{for(i.s();!(e=i.n()).done;){var s,n=e.value,r=Object(R.a)(n);try{for(r.s();!(s=r.n()).done;){var c=s.value,a=document.getElementById("node-".concat(c.row,"-").concat(c.col)).className;"node node-start"!==a&&"node node-finish"!==a&&"node node-wall"!==a&&(document.getElementById("node-".concat(c.row,"-").concat(c.col)).className="node",c.isVisited=!1,c.distance=1/0,c.distanceToFinishNode=Math.abs(this.state.FINISH_NODE_ROW-c.row)+Math.abs(this.state.FINISH_NODE_COL-c.col)),"node node-finish"===a&&(c.isVisited=!1,c.distance=1/0,c.distanceToFinishNode=0),"node node-start"===a&&(c.isVisited=!1,c.distance=1/0,c.distanceToFinishNode=Math.abs(this.state.FINISH_NODE_ROW-c.row)+Math.abs(this.state.FINISH_NODE_COL-c.col),c.isStart=!0,c.isWall=!1,c.previousNode=null,c.isNode=!0)}}catch(o){r.e(o)}finally{r.f()}}}catch(o){i.e(o)}finally{i.f()}}}},{key:"clearWalls",value:function(){if(!this.state.isRunning){var e,t=this.state.grid.slice(),i=Object(R.a)(t);try{for(i.s();!(e=i.n()).done;){var s,n=e.value,r=Object(R.a)(n);try{for(r.s();!(s=r.n()).done;){var c=s.value;"node node-wall"===document.getElementById("node-".concat(c.row,"-").concat(c.col)).className&&(document.getElementById("node-".concat(c.row,"-").concat(c.col)).className="node",c.isWall=!1)}}catch(a){r.e(a)}finally{r.f()}}}catch(a){i.e(a)}finally{i.f()}}}},{key:"visualize",value:function(e){if(!this.state.isRunning){this.clearGrid(),this.toggleIsRunning();var t,i=this.state.grid,s=i[this.state.START_NODE_ROW][this.state.START_NODE_COL],n=i[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];switch(e){case"Dijkstra":this.setState({info:Object(d.jsx)(U,{})}),t=B(i,s,n);break;case"AStar":this.setState({info:Object(d.jsx)(z,{})}),t=L(i,s,n);break;case"BFS":this.setState({info:Object(d.jsx)(J,{})}),t=function(e,t,i){for(var s=[],n=[t];n.length;){var r=n.shift();if(r===i)return s;if(!r.isWall&&(r.isStart||!r.isVisited)){r.isVisited=!0,s.push(r);var c=r.col,a=r.row,o=void 0;a>0&&((o=e[a-1][c]).isVisited||(o.previousNode=r,n.push(o))),a<e.length-1&&((o=e[a+1][c]).isVisited||(o.previousNode=r,n.push(o))),c>0&&((o=e[a][c-1]).isVisited||(o.previousNode=r,n.push(o))),c<e[0].length-1&&((o=e[a][c+1]).isVisited||(o.previousNode=r,n.push(o)))}}}(i,s,n);break;case"DFS":this.setState({info:Object(d.jsx)(Q,{})}),t=function(e,t,i){var s=[],n=[];for(n.push(t);n.length;){var r=n.pop();if(r===i)return s;if(!r.isWall&&(r.isStart||!r.isVisited)){r.isVisited=!0,s.push(r);var c=r.col,a=r.row,o=void 0;a>0&&((o=e[a-1][c]).isVisited||(o.previousNode=r,n.push(o))),a<e.length-1&&((o=e[a+1][c]).isVisited||(o.previousNode=r,n.push(o))),c>0&&((o=e[a][c-1]).isVisited||(o.previousNode=r,n.push(o))),c<e[0].length-1&&((o=e[a][c+1]).isVisited||(o.previousNode=r,n.push(o)))}}}(i,s,n)}var r=function(e){var t=[],i=e;for(;null!==i;)t.unshift(i),i=i.previousNode;return t}(n);r.push("end"),this.animate(t,r)}}},{key:"animate",value:function(e,t){for(var i=this,s=function(s){if(s===e.length)return setTimeout((function(){i.animateShortestPath(t)}),10*s),{v:void 0};setTimeout((function(){var t=e[s],i=document.getElementById("node-".concat(t.row,"-").concat(t.col)).className;"node node-start"!==i&&"node node-finish"!==i&&(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited")}),10*s)},n=0;n<=e.length;n++){var r=s(n);if("object"===typeof r)return r.v}}},{key:"animateShortestPath",value:function(e){for(var t=this,i=function(i){"end"===e[i]?setTimeout((function(){t.toggleIsRunning()}),50*i):setTimeout((function(){var t=e[i],s=document.getElementById("node-".concat(t.row,"-").concat(t.col)).className;"node node-start"!==s&&"node node-finish"!==s&&(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-shortest-path")}),40*i)},s=0;s<e.length;s++)i(s)}},{key:"render",value:function(){var e=this,t=this.state,i=t.grid,s=t.mouseIsPressed;return Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)("div",{className:"left-side",children:Object(d.jsx)("div",{className:"info-box",children:this.state.info})}),Object(d.jsxs)("div",{className:"button-container-graph",children:[Object(d.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.clearGrid()},children:"Clear Grid"}),Object(d.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){return e.clearWalls()},children:"Clear Walls"}),Object(d.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.visualize("Dijkstra")},children:"Dijkstra's"}),Object(d.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.visualize("AStar")},children:"A*"}),Object(d.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.visualize("BFS")},children:"Breath First Search"}),Object(d.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.visualize("DFS")},children:"Depth First Search"}),Object(d.jsx)("table",{className:"grid-container",onMouseLeave:function(){return e.handleMouseLeave()},children:Object(d.jsx)("tbody",{className:"grid",children:i.map((function(t,i){return Object(d.jsx)("tr",{children:t.map((function(t,i){var n=t.row,r=t.col,c=t.isFinish,a=t.isStart,o=t.isWall;return Object(d.jsx)(V,{col:r,isFinish:c,isStart:a,isWall:o,mouseIsPressed:s,onMouseDown:function(t,i){return e.handleMouseDown(t,i)},onMouseEnter:function(t,i){return e.handleMouseEnter(t,i)},onMouseUp:function(){return e.handleMouseUp(n,r)},row:n},i)}))},i)}))})}),Object(d.jsxs)("div",{className:"instructions-container",children:[Object(d.jsx)("h4",{children:"Instructions"}),Object(d.jsxs)("ul",{className:"instructions-list",children:[Object(d.jsx)("li",{children:"You  can move the start an end nodes by clicking and dragging the nodes within the grid."}),Object(d.jsx)("li",{children:"You can create walls by clicking empty squares on the grid.  They will turn black."})]})]})]})]})}}]),i}(s.Component),K=function(e,t,i){var s=e.slice(),n=s[t][i];if(!n.isStart&&!n.isFinish&&n.isNode){var r=Object(T.a)(Object(T.a)({},n),{},{isWall:!n.isWall});s[t][i]=r}return s};var X=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)("main",{children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{path:"/sort",element:Object(d.jsx)(E,{})}),Object(d.jsx)(c.a,{path:"/path",element:Object(d.jsx)(Y,{})})]})})]})})};r.a.render(Object(d.jsx)(l.a,{children:Object(d.jsx)(X,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.a7c4d26e.chunk.js.map