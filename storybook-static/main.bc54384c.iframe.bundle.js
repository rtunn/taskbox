(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{110:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived}));var _home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(25),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_Task__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(167));__webpack_exports__.default={component:_Task__WEBPACK_IMPORTED_MODULE_3__.a,title:"Task"};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_3__.a,Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2021,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_ARCHIVED"})},Default.parameters=Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Task {...args} />"}},Default.parameters),Pinned.parameters=Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Task {...args} />"}},Pinned.parameters),Archived.parameters=Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Task {...args} />"}},Archived.parameters)},167:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);__webpack_require__(0);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"list-item ".concat(state),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"checkbox",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"title",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title",style:{background:"red"}})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()},children:"TASK_ARCHIVED"!==state&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{onClick:function onClick(){return onPinTask(id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon-star"})})})]})}Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1,description:""},onArchiveTask:{type:{name:"func"},required:!1,description:""},onPinTask:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})},169:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PureTaskList}));var objectSpread2=__webpack_require__(25),toConsumableArray=__webpack_require__(168),jsx_runtime=__webpack_require__(20),Task=(__webpack_require__(0),__webpack_require__(167)),es=__webpack_require__(136),redux=__webpack_require__(467),actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK";function taskStateReducer(taskState){return function(state,action){return Object(objectSpread2.a)(Object(objectSpread2.a)({},state),{},{tasks:state.tasks.map((function(task){return task.id===action.id?Object(objectSpread2.a)(Object(objectSpread2.a)({},task),{},{state:taskState}):task}))})}}Object(redux.a)((function reducer(state,action){switch(action.type){case actions_ARCHIVE_TASK:return taskStateReducer("TASK_ARCHIVED")(state,action);case actions_PIN_TASK:return taskStateReducer("TASK_PINNED")(state,action);default:return state}}),{tasks:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}]});function PureTaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=Object(jsx_runtime.jsxs)("div",{className:"loading-item",children:[Object(jsx_runtime.jsx)("span",{className:"glow-checkbox"}),Object(jsx_runtime.jsxs)("span",{className:"glow-text",children:[Object(jsx_runtime.jsx)("span",{children:"Loading"})," ",Object(jsx_runtime.jsx)("span",{children:"cool"})," ",Object(jsx_runtime.jsx)("span",{children:"state"})]})]});if(loading)return Object(jsx_runtime.jsxs)("div",{className:"list-items",children:[LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow]});if(0===tasks.length)return Object(jsx_runtime.jsx)("div",{className:"list-items",children:Object(jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[Object(jsx_runtime.jsx)("span",{className:"icon-check"}),Object(jsx_runtime.jsx)("div",{className:"title-message",children:"You have no tasks"}),Object(jsx_runtime.jsx)("div",{className:"subtitle-message",children:"Sit back and relax"})]})});var tasksInOrder=[].concat(Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"!==t.state}))));return Object(jsx_runtime.jsx)("div",{className:"list-items",children:tasksInOrder.map((function(task){return Object(jsx_runtime.jsx)(Task.a,Object(objectSpread2.a)({task:task},events),task.id)}))})}PureTaskList.defaultProps={loading:!1},PureTaskList.__docgenInfo={description:"",methods:[],displayName:"PureTaskList",props:{loading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Checks if it's in loading state"},tasks:{type:{name:"arrayOf",value:{name:"custom",raw:"Task.propTypes.task"}},required:!0,description:"The list of tasks"},onPinTask:{type:{name:"func"},required:!0,description:"Event to change the task to pinned"},onArchiveTask:{type:{name:"func"},required:!0,description:"Event to change the task to archived"}}};__webpack_exports__.b=Object(es.b)((function(_ref2){return{tasks:_ref2.tasks.filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}))}}),(function(dispatch){return{onArchiveTask:function onArchiveTask(id){return dispatch(function archiveTask(id){return{type:actions_ARCHIVE_TASK,id:id}}(id))},onPinTask:function onPinTask(id){return dispatch(function pinTask(id){return{type:actions_PIN_TASK,id:id}}(id))}}}))(PureTaskList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"PureTaskList",docgenInfo:PureTaskList.__docgenInfo,path:"src/components/TaskList.js"})},297:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var _home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(168),_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(25),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),_TaskList__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(0),__webpack_require__(169)),_Task_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(110);__webpack_exports__.default={component:_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,title:"TaskList",decorators:[function(story){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{padding:"3rem"},children:story()})}]};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},args))},Default=Template.bind({});Default.args={tasks:[Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.Default.args.task),{},{id:"1",title:"Task 1"}),Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.Default.args.task),{},{id:"2",title:"Task 2"}),Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.Default.args.task),{},{id:"3",title:"Task 3"}),Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.Default.args.task),{},{id:"4",title:"Task 4"}),Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.Default.args.task),{},{id:"5",title:"Task 5"}),Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.Default.args.task),{},{id:"6",title:"Task 6"})],onPinTask:function onPinTask(){},onArchiveTask:function onArchiveTask(){}};var WithPinnedTasks=Template.bind({});WithPinnedTasks.args={tasks:[].concat(Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(Default.args.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]),onPinTask:function onPinTask(){},onArchiveTask:function onArchiveTask(){}};var Loading=Template.bind({});Loading.args={tasks:[],loading:!0,onPinTask:function onPinTask(){},onArchiveTask:function onArchiveTask(){}};var Empty=Template.bind({});Empty.args=Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},Loading.args),{},{loading:!1,onPinTask:function onPinTask(){},onArchiveTask:function onArchiveTask(){}}),Default.parameters=Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},Default.parameters),WithPinnedTasks.parameters=Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},WithPinnedTasks.parameters),Loading.parameters=Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},Loading.parameters),Empty.parameters=Object(_home_roger_Apps_js_workspace_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},Empty.parameters)},487:function(module,exports,__webpack_require__){__webpack_require__(488),__webpack_require__(687),__webpack_require__(688),__webpack_require__(931),__webpack_require__(932),__webpack_require__(937),__webpack_require__(938),__webpack_require__(936),__webpack_require__(934),__webpack_require__(939),__webpack_require__(933),__webpack_require__(935),__webpack_require__(940),module.exports=__webpack_require__(928)},583:function(module,exports){},688:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(350)},717:function(module,exports){},927:function(module,exports,__webpack_require__){},928:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(350).configure)([__webpack_require__(929)],module,!1)}).call(this,__webpack_require__(193)(module))},929:function(module,exports,__webpack_require__){var map={"./InboxScreen.stories.js":941,"./Task.stories.js":110,"./TaskList.stories.js":297};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=929},940:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(949),types=__webpack_require__(947),esm=__webpack_require__(4),parameters=(__webpack_require__(927),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},941:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Error",(function(){return Error}));var objectSpread2=__webpack_require__(25),jsx_runtime=__webpack_require__(20),es=(__webpack_require__(0),__webpack_require__(136)),TaskList=__webpack_require__(169);function PureInboxScreen(_ref){return _ref.error?Object(jsx_runtime.jsx)("div",{className:"page lists-show",children:Object(jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[Object(jsx_runtime.jsx)("span",{className:"icon-face-sad"}),Object(jsx_runtime.jsx)("div",{className:"title-message",children:"Oh no!"}),Object(jsx_runtime.jsx)("div",{className:"subtitle-message",children:"Something went wrong"})]})}):Object(jsx_runtime.jsxs)("div",{className:"page lists-show",children:[Object(jsx_runtime.jsx)("nav",{children:Object(jsx_runtime.jsx)("h1",{className:"title-page",children:Object(jsx_runtime.jsx)("span",{className:"title-wrapper",children:"Taskbox"})})}),Object(jsx_runtime.jsx)(TaskList.b,{})]})}PureInboxScreen.defaultProps={error:null},PureInboxScreen.__docgenInfo={description:"",methods:[],displayName:"PureInboxScreen",props:{error:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"The error message"}}};Object(es.b)((function(_ref2){return{error:_ref2.error}}))(PureInboxScreen);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InboxScreen.js"]={name:"PureInboxScreen",docgenInfo:PureInboxScreen.__docgenInfo,path:"src/components/InboxScreen.js"});var esm=__webpack_require__(122),TaskList_stories=__webpack_require__(297),store={getState:function getState(){return{tasks:TaskList_stories.Default.args.tasks}},subscribe:function subscribe(){return 0},dispatch:Object(esm.action)("dispatch")},InboxScreen_stories_Template=(__webpack_exports__.default={component:PureInboxScreen,title:"InboxScreen",decorators:[function(story){return Object(jsx_runtime.jsx)(es.a,{store:store,children:story()})}]},function Template(args){return Object(jsx_runtime.jsx)(PureInboxScreen,Object(objectSpread2.a)({},args))}),Default=InboxScreen_stories_Template.bind({}),Error=InboxScreen_stories_Template.bind({});Error.args={error:"Something"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <PureInboxScreen {...args} />"}},Default.parameters),Error.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <PureInboxScreen {...args} />"}},Error.parameters)}},[[487,2,3]]]);