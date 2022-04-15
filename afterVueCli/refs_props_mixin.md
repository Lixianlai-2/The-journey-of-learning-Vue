<a name="2ea2b979"></a>
## ref 属性/props/mixin混入
<a name="4d23d658"></a>
### ref 有什么作用

1.  被用来给元素或子组件注册引用信息（id 的替代者） 
1.  放入组件标签中，可以获取组件实例对象 
1.  放入 html 标签中，可以获取 DOM 节点 

![Image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649690998462-de9caa56-3eaf-4532-a025-0f380b41a9d7.png)
<a name="5d8df7f4"></a>

### 怎么使用 ref

-  打标识 
   - ![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649691027726-8f4974dd-6617-4bd3-a543-56368eb92538.png)
-  获取 
   - `$refs`在组件实例对象上
   - 使用`this.$refs`得到对象
   - 如果要得到具体的 ref 需要使用`this.$refs.具体的ref`
   - ![Image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649691092385-d573d84d-3da5-4162-9bc7-2741200d46db.png)

<a name="092ad89f"></a>
### 用`id和ref`有什么区别？

-  如果对组件标签使用`id`，然后用 DOM 方法得到它，那么得到的就是`DOM结构` 
   - ![Image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649691068195-46e3cbb0-0146-481a-a0fb-e786fcd73581.png)
-  如果用的是`ref`，那么得到的是`VueComponent`（也就是组件实例对象）  
   - ![Image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649691050665-c46a617b-696f-4ff9-89ca-47dc5bcef180.png)
<a name="cfeef89b"></a>
### 用 ref 得到实例对象有什么作用？

-  可以用于组件通信（待深入） 
<a name="WHG2F"></a>
## props
<a name="sxFgZ"></a>
#### 为什么需要props

- 要让其他人也用相同的组件，但是数据不一样
- 实现了数据的不同展示
- 都能够分别增加、修改自己的内容![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649944005400-f9037273-13c8-470f-94a5-68ad18e58717.png)
<a name="fCvWv"></a>
#### 怎么使用props

- 首先得在组件标签中写相应数据（高一层级的组件）
   - ![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649943528169-2ed26ea4-bddb-4fb3-a3da-6f59267dddca.png)
- 然后得跟组件说一声要用外部的数据（低一层级的组件。注意要用字符串）
   - ![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649943554515-83ee7fed-a167-42ba-8b39-4eca9d667b9e.png)
- 最后是在template中使用通过props获取的外部数据

![Image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649982739307-100da1a4-4336-4644-b428-113be0b19310.png)
<a name="x872F"></a>

#### props有哪三种方式？

- 简单声明接受
   - ![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649943603465-af2d7bdf-23ad-4141-ba58-9ab18db2f802.png)
- 指定类型接受
   - ![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649943584909-9a637d59-feb6-40b1-95cd-259c7e931e9a.png)
   - 如果数据不对，会进行相应的提示
      - ![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649943584977-7677b7e6-a4fa-49f3-a909-f3aec7d74fb1.png)
- 完整类型
   - ![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649943585013-9fcb4571-b304-4232-be76-0c7e292862cd.png)
<a name="HA7qH"></a>
#### 如果传输的参数是18，但要展示的偏要是19，怎么做到呢？

- 用`v-bind`将字符串中的内容变成表达式
   - `:`是`v-bind`的缩写

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649943659123-9da1ede5-abed-4c68-b2de-83e18957cdb5.png)
<a name="yZjJ4"></a>

#### 怎么判断数据是data还是props呢？

- 直接在开发者工具上看

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649943745679-9726cb00-3620-49cc-a5c9-8190ca8eb6ec.png)
<a name="TrrU5"></a>

#### props和data上的数据，谁的优先级更高呢？

- `props`上的内容是优先被接收的
<a name="q0VeV"></a>
#### 如果传入的prop是一定要被修改，怎样操作呢？

- 实际上还是无法修改
- 只能让`data`中的某个属性等于`props`中的数据
   - 因为`props`的读取优先级比`data`要高
- 比如年龄一定要修改
   - 先让`myAge = this.age`（之所以这么做，是因为props的优先级比data高，先读取这里）
   - 然后页面上实际展示的就是`myAge`![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649943870693-b216b331-1ff6-490e-a96d-19c374f5dd6d.png)
<a name="ED20w"></a>
## mixin混入  
<a name="ItMkz"></a>
#### 什么叫混入

- 把相同的内容共同引入
- 两个组件共享一个配置
- 比如下图的showName方法就重复了
  - ![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649944113653-0561d12e-7063-4f71-a3a3-12275038aa57.png)
  <a name="PBKNo"></a>
#### mixin.js写在哪个位置？

- 写在main.js的同层的地方
<a name="Peiry"></a>
#### mixin.js要写什么内容？

- 想要共用的方法
- 然后export暴露出去
- 在对象的组件里面再引入
- 然后再mixins里面用数组引用

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25396806/1649944274394-490cc134-82c9-42fd-85ad-f168dce72a01.png)
