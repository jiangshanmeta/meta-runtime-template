export default{
    name:'meta-runtime-template',
    functional:true,
    props:{
        template:{
            type:String,
            required:true,
        },
    },
    render(h,{props,parent}){

        // 这个是匿名包裹组件的配置
        // 匿名包裹组件起到代理父实例的作用
        const vueOptions = {
            // 按照模板渲染
            template:props.template,
            beforeCreate(){

                //访问父实例上的属性
                Object.setPrototypeOf(this,parent);

                // data的值虽然是绑定在vm上，实质是访问_data上对应的值
                Object.defineProperty(this,'_data',{
                    get(){
                        return parent._data
                    },
                    set(){

                    },
                })

                // 类似于data
                Object.defineProperty(this,'_prop',{
                    get(){
                        return parent._prop;
                    },
                    set(){

                    },
                })
            },
            // assets访问的是$options下的，无法通过原型链简单代理
            components:parent.$options.components,
            filters:parent.$options.filters,
            directives:parent.$options.directives,

        }
        return h(vueOptions);
    }
}