在React中，生命周期方法分别有：
componentWillMount
componentDidMount
componentWillUnmount
componentWillUpdate
componentDidUpdate
shouldComponentUpdate
componentWillReceiveProps
以及3个严格意义上不属于生命周期，但是与生命周期紧密相连的方法
getInitialState
getDefaultProps
render

以上的方法会在组件的不同状态下以此触发，其中render是每次都会触发

1. 初始渲染阶段
当组件准备开始其生命，进入 DOM 时，如下的生命周期方法被调用：
getDefaultProps -> getInitialState -> componentWillMount -> render

- getDefaultProps：该方法允许我们指定 this.props 的默认值。它在组件被创建或者父组件的任何属性传递进来之前被调用。
- getInitialState：本方法允许我们指定在组件被创建前 this.state的默认值。与 getDefaultProps 方法一样，它也是在组件被创建前被调用。
- componentWillMount：这是组件被渲染到 DOM 之前被调用的最后一个方法。一个需要指出的重要事情是：如果在这个方法中调用 setState，那么组件是不会被重新渲染。
- render：这个方法对于我们来说肯定很熟悉。每个组件必须定义有这个方法，它负责返回单个根 HTML 节点（该节点内部可以有很多字节点）。如果我们不想渲染任何东西，让它返回 null 或者 false 即可。
	componentDidMount：组件渲染并且放到 DOM 后，该方法会立即被调用。在这个点上，我们可以安全的执行任何 DOM 查询操作，而不用担心组件是否被创建。如果有代码依赖于组件是否准备好了，那么你也可以在这里指定所有代码。
	除了 render 方法外，所有这些生命周期方法只能触发一次。这与我们下面要看到的方法有很大不同。


2. 更新阶段

2.1 组件状态(state)改变
当状态发生改变时，如下生命周期方法被调用：
shouldComponentUpdate -> componentWillMount -> render -> componentDidMount

- shouldComponentUpdate 有时，当一个状态发生改变时，你不想让组件更新。这个方法可以让我们控制更新行为。如果你使用该方法，并返回一个 true 值，组件就会被更新。如果返回一个 false 值，该组件就不会更新。

2.2 父组件状态(prop)改变
组件更新的另一个时间是，当组件已经被渲染到 DOM 以后，其 prop 值发生改变时。在这种情况下，如下的生命周期方法被调用：著作权归作者所有。
componentWillReceiveProps -> shouldComponentUpdate -> componentWillMount -> render -> componentDidMount

3. 卸载阶段
最后一个阶段是当组件要销毁，并从 DOM 中删除时：
这里唯一的生命周期方法是 componentWillUnmount。我们可以在这个方法中执行清理相关的任务，比如移除事件监听器、停止计数器等等。在该方法被调用后，组件就从 DOM 中移除，你可以对它说拜拜了。
