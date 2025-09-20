# React Awsome Components

这是一个功能丰富的React组件库，提供了多种常用的UI组件，包括手风琴、卡片、导航栏、侧边栏等组件。

## 组件目录结构

```
src/components/
├── accordions/          # 手风琴组件
│   ├── Accordion1/     # 手风琴样式1
│   └── Accordion2/     # 手风琴样式2
├── buttons/            # 按钮组件
│   └── FabButton/     # 悬浮按钮
├── cards/             # 卡片组件
│   └── Card1/        # 卡片样式1
├── carousels/         # 轮播图组件
│   └── Carousel1/    # 轮播图样式1
├── gsap/              # GSAP动画组件
│   ├── ScrollReveal/  # 滚动显示动画
│   └── TypedMessage/  # 打字机效果
├── libraries/         # 第三方库集成组件
│   ├── rc-slider/     # 滑块组件
│   ├── react-dropzone/# 文件拖放组件
│   └── react-xarrows/ # 箭头连接组件
├── navbars/           # 导航栏组件
│   └── Navbar1/      # 导航栏样式1
├── parallax/          # 视差效果组件
│   ├── parallax-1/   # 视差效果1
│   └── parallax-2/   # 视差效果2
├── sidebars/          # 侧边栏组件
│   ├── Sidebar1/     # 侧边栏样式1
│   └── Sidebar2/     # 侧边栏样式2
└── widgets/           # 通用小部件
    ├── Widget1/      # 小部件1
    └── Widget2/      # 小部件2
```

## 可用组件列表

1. **手风琴组件 (Accordions)**
   - Accordion1 - 基础手风琴组件，支持图片展示
   - Accordion2 - 高级手风琴组件，带自定义样式

2. **按钮组件 (Buttons)**
   - FabButton - 悬浮操作按钮，可自定义位置和样式

3. **卡片组件 (Cards)**
   - Card1 - 响应式卡片组件，支持图片和文字内容

4. **轮播图组件 (Carousels)**
   - Carousel1 - 图片轮播组件，支持自动播放和手动控制

5. **GSAP动画组件**
   - ScrollReveal - 滚动显示动画效果
   - TypedMessage - 打字机文字效果

6. **导航栏组件 (Navbars)**
   - Navbar1 - 响应式导航栏，支持头像显示

7. **视差效果组件 (Parallax)**
   - Parallax1 - 基础视差滚动效果
   - Parallax2 - 多层视差效果，支持多张背景图片

8. **侧边栏组件 (Sidebars)**
   - Sidebar1 - 基础侧边栏，带logo显示
   - Sidebar2 - 高级侧边栏，带背景图片效果

9. **小部件 (Widgets)**
   - Widget1 - 通用小部件组件
   - Widget2 - 高级小部件组件

## 第三方库集成

本项目集成了以下第三方库的组件：
- rc-slider - 滑块选择器
- react-dropzone - 文件拖放上传
- react-xarrows - 元素之间的箭头连接

## 路由配置

所有组件都已配置了相应的路由，可以通过以下路径访问：
- 手风琴1: `/accordions/accordion-1`
- 手风琴2: `/accordions/accordion-2`
- 卡片1: `/cards/card-1`
- 视差效果1: `/parallax/parallax-1`
- 视差效果2: `/parallax/parallax-2`
- 侧边栏1: `/sidebars/sidebar-1`
- 侧边栏2: `/sidebars/sidebar-2`
- 导航栏1: `/navbars/navbar-1`
- 轮播图1: `/carousels/carousel-1`
- 悬浮按钮: `/buttons/fab-button`
- 小部件1: `/widgets/widget-1`
- 小部件2: `/widgets/widget-2`

## 使用说明

1. 所有组件都支持自定义样式，可通过修改对应的CSS文件进行定制
2. 部分组件提供了示例文件（以Example结尾），可以参考使用方法
3. 组件库使用了模块化的结构，可以按需引入所需组件
4. 动画相关组件依赖GSAP库，确保已安装相关依赖

## 注意事项

1. 确保项目中已安装所需的依赖包
2. 部分组件可能需要额外的资源文件（如图片、视频等）
3. 建议查看各组件目录下的示例文件，了解具体使用方法
4. 所有组件都经过响应式设计，支持不同屏幕尺寸
