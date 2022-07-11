## 项目规范文档

### 一、项目文件、组件命名规范

推荐使用 Vue 官方推荐的风格文档

官网: https://v3.cn.vuejs.org/style-guide/

### 二、EditorConfig 配置

**1、简介**

EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的代码风格。

官网：https://editorconfig.org/

**2、安装 Vscode 插件（EditorConfig）**

**3、配置 EditorConfig**

```
# 规范不同编辑器的代码风格
# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off # 关闭最大行长度限制
trim_trailing_whitespace = false # 关闭末尾空格修剪
```

### 三、代码格式化工具

**1、下载安装 prettier**

```
npm i prettier -D
```

**2、安装 Vscode 插件（Prettier）**

**3、配置 Prettier**

由于 json 格式不能主食，不使用 json 格式的配置文件

```javascript
module.exports = {
	// 超过最大值换行
	printWidth: 130,
	// 缩进字节数
	tabWidth: 2,
	// 使用制表符而不是空格缩进行
	useTabs: true,
	// 结尾不用分号(true有，false没有)
	semi: true,
	// 使用单引号(true单双引号，false双引号)
	singleQuote: false,
	// 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
	quoteProps: "as-needed",
	// 在对象，数组括号与文字之间加空格 "{ foo: bar }"
	bracketSpacing: true,
	// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
	trailingComma: "none",
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: false,
	//  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号
	arrowParens: "avoid",
	// 如果文件顶部已经有一个 doclock，这个选项将新建一行注释，并打上@format标记。
	insertPragma: false,
	// 指定要使用的解析器，不需要写文件开头的 @prettier
	requirePragma: false,
	// 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
	proseWrap: "preserve",
	// 在html中空格是否是敏感的 "css" - 遵守CSS显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
	htmlWhitespaceSensitivity: "css",
	// 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
	endOfLine: "auto",
	// 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
	rangeStart: 0,
	rangeEnd: Infinity,
	// Vue文件脚本和样式标签缩进
	vueIndentScriptAndStyle: false
};
```

### 四、ESLint配置
**1、简介**

ESLint 是一款用于查找并报告代码中问题的工具，并且支持部分问题自动修复。其核心是通过对代码解析得到的 AST（Abstract Syntax Tree 抽象语法树）进行模式匹配，来分析代码达到检查代码质量和风格问题的能力。

**2、安装ESLint**
```
npm i eslint -D
```

**3、配置ESLint**

ESLint 安装成功后，执行 npx eslint --init，然后按照终端操作提示完成一系列设置来创建配置文件。

* How would you like to use ESLint? （你想如何使用 ESLint?）
  ![img.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img.png)
  
  我们这里选择 To check syntax, find problems, and enforce code style（检查语法、发现问题并强制执行代码风格）


* What type of modules does your project use?（你的项目使用哪种类型的模块?）
  ![img_1.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_1.png)

  我们这里选择 JavaScript modules (import/export)


* Which framework does your project use? （你的项目使用哪种框架?）
  ![img_2.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_2.png)

  我们这里选择 Vue.js


* Does your project use TypeScript?（你的项目是否使用 TypeScript？）
  ![img_3.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_3.png)

  我们这里选择 Yes


* Where does your code run?（你的代码在哪里运行?）
  ![img_5.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_5.png)

  我们这里选择 Browser 和 Node（按空格键进行选择，选完按回车键确定）


* How would you like to define a style for your project?（你想怎样为你的项目定义风格？）
  ![img_6.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_6.png)

  我们这里选择 Use a popular style guide（使用一种流行的风格指南）


* Which style guide do you want to follow?（你想遵循哪一种风格指南?）
  ![img_7.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_7.png)

  我们这里选择 Airbnb：https://github.com/airbnb/javascript （选择了star最多的）


* What format do you want your config file to be in?（你想选择那种配置文件的格式）
  ![img_8.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_8.png)

  我们这里选择 JavaScript


* Would you like to install them now?
  ![img_9.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_9.png)
  
  我们这里选择 yes


**4、生成配置文件**
在上一步操作完成后，会在项目根目录下自动生成 .eslintrc.js 配置文件

根据项目实际情况，如果我们有额外的 ESLint 规则，也在此文件中追加。

**5、VSCode安装ESLint**


**6、自动化修复代码风格**
* VSCode在 settings.json 设置文件中，增加以下代码：
  ```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  ```


* WebStorm 打开设置窗口，按如下操作，最后点击 Apply -> OK。
![img_10.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_10.png)


**7、解决Prettier和ESLint的冲突**
通常大家会在项目中根据实际情况添加一些额外的 ESLint 和 Prettier 配置规则，难免会存在规则冲突情况。

本项目中的 ESLint 配置中使用了 Airbnb JavaScript 风格指南校验，其规则之一是代码结束后面要加分号，而我们在 Prettier 配置文件中加了代码结束后面不加分号的配置项，这样就有冲突了，会出现用 Prettier 格式化后的代码，ESLint 检测到格式有问题的，从而抛出错误提示。
解决两者冲突问题，需要用到 eslint-plugin-prettier 和 eslint-config-prettier。

* eslint-plugin-prettier 将 Prettier 的规则设置到 ESLint 的规则中。
* eslint-config-prettier 关闭 ESLint 中与 Prettier 中会发生冲突的规则。

```
npm i eslint-plugin-prettier eslint-config-prettier -D
```
* 在 .eslintrc.js 添加 prettier 插件
```
module.exports = {
  ...
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  ...
}
```

### 规范git提交
**1、简介**

我们在项目中已集成 ESLint 和 Prettier，在编码时，这些工具可以对我们写的代码进行实时校验，在一定程度上能有效规范我们写的代码，但团队可能会有些人觉得这些条条框框的限制很麻烦，选择视“提示”而不见，依旧按自己的一套风格来写代码，或者干脆禁用掉这些工具，开发完成就直接把代码提交到了仓库，日积月累，ESLint 也就形同虚设。

所以，我们还需要做一些限制，让没通过 ESLint 检测和修复的代码禁止提交，从而保证仓库代码都是符合规范的。

为了解决这个问题，我们需要用到 Git Hook，在本地执行 git commit 的时候，就对所提交的代码进行 ESLint 检测和修复（即执行 eslint --fix），如果这些代码没通过 ESLint 规则校验，则禁止提交。

实现这一功能，我们借助 husky + lint-staged 。


**2、配置husky**
* 自动化配置（推荐）
  
  使用 husky-init 命令快速在项目初始化一个 husky 配置。
  
  `npx husky-init && npm install`
  
  这行命令做了四件事：
  1. 安装 husky 到开发依赖
  ![img_11.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_11.png)
     
  2. 在项目根目录下创建 .husky 目录
  3. 在 .husky 目录创建 pre-commit hook，并初始化 pre-commit 命令为 npm test
  4. 修改 package.json 的 scripts，增加 "prepare": "husky install"
  

**3、配置lint-staged**

lint-staged 这个工具一般结合 husky 来使用，它可以让 husky 的 hook 触发的命令只作用于 git add 那些文件（即 git 暂存区的文件），而不会影响到其他文件。
* 安装lint-staged

`npm i lint-staged -D`

* 在 package.json里增加 lint-staged 配置项
![img_12.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_12.png)
  
* 修改 .husky/pre-commit hook 的触发命令为：npx lint-staged
![img_13.png](https://document-1-1255829223.cos.ap-shanghai.myqcloud.com/github/img_13.png)
