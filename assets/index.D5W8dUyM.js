import{_ as f}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.BHWdZxxX.js";import"./chunks/pinia.gM4CtPT_.js";import{e as g,u as E,a as B}from"./chunks/vue-router.COYb0BJC.js";import{a7 as v,an as l,X as y,a8 as C,am as t,af as n,ac as x,aj as a,Z as c}from"./framework.hWCtYY1X.js";import"./app.JCnF4OTK.js";import"./chunks/dayjs.BdcnXKr1.js";import"./chunks/vue-i18n.DXR2i9JP.js";/* empty css                    */import"./chunks/nprogress.Bru8d7fl.js";import"./content.DqeZybgq.js";import"./router.-rV2tM5K.js";const P="/assets/UnityShader%E4%B8%8E%E5%9B%BE%E5%BD%A2%E6%B8%B2%E6%9F%93%EF%BC%883%EF%BC%89_%E5%8F%98%E6%8D%A2%E6%B5%81%E7%A8%8B.DnDg0Sgk.jpg",M="/assets/UnityShader%E4%B8%8E%E5%9B%BE%E5%BD%A2%E6%B8%B2%E6%9F%93%EF%BC%883%EF%BC%89_%E5%8F%98%E6%8D%A2%E7%9F%A9%E9%98%B5.BtRCKhc7.jpg",T="/assets/UnityShader%E4%B8%8E%E5%9B%BE%E5%BD%A2%E6%B8%B2%E6%9F%93%EF%BC%883%EF%BC%89_%E9%BD%90%E6%AC%A1%E5%9D%90%E6%A0%87.J_qDPnvn.jpg",b="/assets/UnityShader%E4%B8%8E%E5%9B%BE%E5%BD%A2%E6%B8%B2%E6%9F%93%EF%BC%883%EF%BC%89_2D%E5%8F%98%E6%8D%A2%E7%9F%A9%E9%98%B5.C0y70Orb.jpg",S="/assets/UnityShader%E4%B8%8E%E5%9B%BE%E5%BD%A2%E6%B8%B2%E6%9F%93%EF%BC%883%EF%BC%89_M.CQrg-tDX.jpg",D="/assets/UnityShader%E4%B8%8E%E5%9B%BE%E5%BD%A2%E6%B8%B2%E6%9F%93%EF%BC%883%EF%BC%89_V.B8ILK3QP.jpg",F="/assets/UnityShader%E4%B8%8E%E5%9B%BE%E5%BD%A2%E6%B8%B2%E6%9F%93%EF%BC%883%EF%BC%89_P.3Icsx-Ky.jpg",U=g("/posts/unity-shader-rendering-3",async i=>JSON.parse('{"title":"Unity Shader与图形渲染（3）","description":"","frontmatter":{"title":"Unity Shader与图形渲染（3）","date":"2024-02-20 15:15:37","categories":"学习","tags":["渲染","Unity"]},"headers":[],"relativePath":"pages/posts/unity-shader-rendering-3/index.md","lastUpdated":1766063492000}'),{lazy:(i,r)=>i.name===r.name}),z={__name:"index",setup(i,{expose:r}){const{data:p}=U(),u=B(),d=E(),o=Object.assign(d.meta.frontmatter||{},p.value?.frontmatter||{});return u.currentRoute.value.data=p.value,c("valaxy:frontmatter",o),globalThis.$frontmatter=o,r({frontmatter:{title:"Unity Shader与图形渲染（3）",date:"2024-02-20 15:15:37",categories:"学习",tags:["渲染","Unity"]}}),(e,s)=>{const m=f;return C(),v(m,{frontmatter:y(o)},{"main-content-md":l(()=>[s[0]||(s[0]=n("p",null,"空间变换与Shader结构",-1)),x(" more "),s[1]||(s[1]=n("p",null,"模型渲染的过程中，首先需要应对的问题是如何把模型数据中的顶点坐标转换为其在屏幕上的坐标。",-1)),s[2]||(s[2]=n("figure",null,[n("img",{src:P,alt:"",loading:"lazy",decoding:"async"})],-1)),s[3]||(s[3]=n("h1",{id:"线性代数与空间变换",tabindex:"-1"},[a("线性代数与空间变换 "),n("a",{class:"header-anchor",href:"#线性代数与空间变换","aria-label":'Permalink to "线性代数与空间变换"'},"​")],-1)),s[4]||(s[4]=n("h2",{id:"变换矩阵",tabindex:"-1"},[a("变换矩阵 "),n("a",{class:"header-anchor",href:"#变换矩阵","aria-label":'Permalink to "变换矩阵"'},"​")],-1)),s[5]||(s[5]=n("p",null,"可以将点的坐标和一个矩阵相乘得到该点变换过后的坐标。",-1)),s[6]||(s[6]=n("figure",null,[n("img",{src:M,alt:"",loading:"lazy",decoding:"async"})],-1)),s[7]||(s[7]=n("p",null,"上方左侧的矩阵就是一个“scaling”（缩放）矩阵。它会使一个物体从坐标原点放大。一个变换矩阵的每一列代表着变换之后其对应坐标轴的单位变化。 比如原本x坐标轴的一个单位是(1,0,0,0)，而上方矩阵的第一列为(sx,0,0,0)，所以上方矩阵的“含义”是将x坐标轴的一个单位放 到(sx,0,0,0)的位置上。这样就相当于在x轴方向“缩放”了sx倍。",-1)),s[8]||(s[8]=n("h3",{id:"齐次坐标-homogeneous-coordinates",tabindex:"-1"},[a("齐次坐标 Homogeneous Coordinates "),n("a",{class:"header-anchor",href:"#齐次坐标-homogeneous-coordinates","aria-label":'Permalink to "齐次坐标 Homogeneous Coordinates"'},"​")],-1)),s[9]||(s[9]=n("p",null,"变换矩阵总是会多一个维度。2D变换矩阵的大小是3x3， 而3D变换矩阵的大小是4x4。多出一个分量的坐标叫做“齐次坐标”。",-1)),s[10]||(s[10]=n("p",null,"齐次坐标允许我们将位移用变换矩阵表示出来:",-1)),s[11]||(s[11]=n("figure",null,[n("img",{src:T,alt:"",loading:"lazy",decoding:"async"})],-1)),s[12]||(s[12]=n("p",null,"位移、缩放、旋转、变形等等操作都可以用一个矩阵来表示。下方是2D变换矩阵的例子:",-1)),s[13]||(s[13]=n("figure",null,[n("img",{src:b,alt:"",loading:"lazy",decoding:"async"})],-1)),s[14]||(s[14]=n("h3",{id:"变换矩阵的复合",tabindex:"-1"},[a("变换矩阵的复合 "),n("a",{class:"header-anchor",href:"#变换矩阵的复合","aria-label":'Permalink to "变换矩阵的复合"'},"​")],-1)),s[15]||(s[15]=n("p",null,"如果想对一个物体进行复合的变换，只需将这些变换的矩阵从左到右分别乘起来得到一个复合变换矩阵就可以。 比如：先将一个物体位移到A（矩阵为M1），再旋转B（矩阵为M2），只需左乘（M1*M2）这个复合矩阵就好。",-1)),s[16]||(s[16]=n("p",null,"可以把一个物体的所有自身变换（位移、旋转、缩放）放在一个矩阵里。 这个矩阵被称为模型矩阵（Model Matrix）。",-1)),s[17]||(s[17]=n("h2",{id:"mvp空间变换",tabindex:"-1"},[a("MVP空间变换 "),n("a",{class:"header-anchor",href:"#mvp空间变换","aria-label":'Permalink to "MVP空间变换"'},"​")],-1)),s[18]||(s[18]=n("h3",{id:"model-transformation",tabindex:"-1"},[a("Model Transformation "),n("a",{class:"header-anchor",href:"#model-transformation","aria-label":'Permalink to "Model Transformation"'},"​")],-1)),s[19]||(s[19]=n("p",null,"在空间变换的第一步，需要把模型坐标转换为世界坐标。",-1)),s[20]||(s[20]=n("figure",null,[n("img",{src:S,alt:"",loading:"lazy",decoding:"async"})],-1)),s[21]||(s[21]=n("p",null,"模型坐标是以模型自身中心为原点的坐标，而世界坐标是以世界中心为原点的坐标。在这一步中，将模型的每一个顶点位置乘以其Model Matrix。 这样，模型就拥有世界中的位置、旋转、与大小了。",-1)),s[22]||(s[22]=n("h3",{id:"view-transformation",tabindex:"-1"},[a("View Transformation "),n("a",{class:"header-anchor",href:"#view-transformation","aria-label":'Permalink to "View Transformation"'},"​")],-1)),s[23]||(s[23]=n("p",null,"在空间变换的第二步，需要把世界坐标转换为视角坐标（或相机坐标）。",-1)),s[24]||(s[24]=n("figure",null,[n("img",{src:D,alt:"",loading:"lazy",decoding:"async"})],-1)),s[25]||(s[25]=n("p",null,"视角坐标（或相机坐标）是以相机自身中心为原点，且Z轴指向相机方向的坐标系。在这一步中，将模型的每一个顶点位置乘以相机的View Matrix。 这样，就可以从相机的视角看向物体了。",-1)),s[26]||(s[26]=n("h3",{id:"projection-transformation",tabindex:"-1"},[a("Projection Transformation "),n("a",{class:"header-anchor",href:"#projection-transformation","aria-label":'Permalink to "Projection Transformation"'},"​")],-1)),s[27]||(s[27]=n("p",null,"在空间变换的第三步，需要把相机坐标转换为剪裁坐标。",-1)),s[28]||(s[28]=n("figure",null,[n("img",{src:F,alt:"",loading:"lazy",decoding:"async"})],-1)),s[29]||(s[29]=n("p",null,[a("剪裁坐标是以相机自身中心为原点，且具有投影的坐标系。投影分为两种："),n("strong",null,"正交投影"),a("（Orthographic Projection） 和"),n("strong",null,"透视投影"),a("（Perspective Projection）。")],-1)),s[30]||(s[30]=n("p",null,"在这一步中，将模型的每一个顶点位置乘以相机的Projection Matrix。 这样，就拥有一个正确显示在屏幕上的物体了。",-1)),s[31]||(s[31]=n("p",null,[a("Model Matrix、View Matrix和Projection Matrix当然也可以复合，只要把这三个矩阵从左到右相乘，就可以得到一个MVP Matrix。它能将一个点从模型空间直接变换至剪裁空间。以上的MVP变换，其实就是"),n("strong",null,"Vertex Shader"),a("（顶点着色器）的主要工作。")],-1)),s[32]||(s[32]=n("p",null,[a("在Unity的vertex shader中，可以通过这个语句完成MVP变换："),n("code",null,"o.vertex = mul(UNITY_MATRIX_MVP, v.vertex)"),a("mul是矩阵乘法函数")],-1)),s[33]||(s[33]=n("h1",{id:"unity-shader结构",tabindex:"-1"},[a("Unity Shader结构 "),n("a",{class:"header-anchor",href:"#unity-shader结构","aria-label":'Permalink to "Unity Shader结构"'},"​")],-1)),s[34]||(s[34]=n("ul",null,[n("li",null,"Properties：公开在引擎面板上的，可以在引擎里直接修改的变量"),n("li",null,"SubShader: shader的内容"),n("li",null,"Tags：一些可以设定的属性"),n("li",null,"Pass：一次渲染周期（vert+frag shader）。这是shader的主体代码。")],-1)),s[35]||(s[35]=n("div",{class:"language-clike"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"},"clike"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'Shader "Unlit/myShader"')]),a(`
`),n("span",{class:"line"},[n("span",null,"{")]),a(`
`),n("span",{class:"line"},[n("span",null,"    Properties//这是面向引擎的")]),a(`
`),n("span",{class:"line"},[n("span",null,"    {")]),a(`
`),n("span",{class:"line"},[n("span",null,"        //这是Unity自己的语言既不是CG也不是C#")]),a(`
`),n("span",{class:"line"},[n("span",null,'        _MainTex ("Texture", 2D) = "white" {}')]),a(`
`),n("span",{class:"line"},[n("span",null,'        _Color ("Color", Color) = (1,1,1,1)')]),a(`
`),n("span",{class:"line"},[n("span",null,'        _Cutoff ("Alpha Cutoff", Range(0,1)) = 0.5           ')]),a(`
`),n("span",{class:"line"},[n("span",null,'        //结构是：shader中的变量名（"在引擎当中显示的名字"，变量类型）=初始值（句末没有“;”）')]),a(`
`),n("span",{class:"line"},[n("span",null,"        //这里面的变量完完全全只是面向引擎的，如果不相应的在下面的SubShader部分中定义一个相同的变量（“相同”指的是变量名和变量类型均相同），只通过更改引擎中的上面变量的值，不会对这个Shader产生任何影响，比如说你更改了_Color的值，改变了颜色，但是物体的颜色并不会改变")]),a(`
`),n("span",{class:"line"},[n("span",null,"    }")]),a(`
`),n("span",{class:"line"},[n("span",null,"    SubShader//这是真正的Shader的内容")]),a(`
`),n("span",{class:"line"},[n("span",null,"    {")]),a(`
`),n("span",{class:"line"},[n("span",null,'        Tags { "RenderType"="Opaque" }')]),a(`
`),n("span",{class:"line"},[n("span",null,"        LOD 100")]),a(`
`),n("span",{class:"line"},[n("span")]),a(`
`),n("span",{class:"line"},[n("span",null,"        Pass")]),a(`
`),n("span",{class:"line"},[n("span",null,"        {")]),a(`
`),n("span",{class:"line"},[n("span",null,"            CGPROGRAM//下面才是CG语言")]),a(`
`),n("span",{class:"line"},[n("span",null,'            #pragma vertex vert//定义vertex shader 部分的函数叫"vert"，和下面对应')]),a(`
`),n("span",{class:"line"},[n("span",null,'            #pragma fragment frag//定义fragment shader 部分的函数叫"frag"，和下面对应')]),a(`
`),n("span",{class:"line"},[n("span",null,"            // make fog work")]),a(`
`),n("span",{class:"line"},[n("span",null,"            #pragma multi_compile_fog//后面再了解")]),a(`
`),n("span",{class:"line"},[n("span")]),a(`
`),n("span",{class:"line"},[n("span",null,'            #include "UnityCG.cginc"//类似C++的头文件，C#的using')]),a(`
`),n("span",{class:"line"},[n("span")]),a(`
`),n("span",{class:"line"},[n("span",null,"            struct appdata")]),a(`
`),n("span",{class:"line"},[n("span",null,"            {	")]),a(`
`),n("span",{class:"line"},[n("span",null,"                //:后面是语义 semantics，为了“告诉”电脑前面的变量是什么")]),a(`
`),n("span",{class:"line"},[n("span",null,"                float4 vertex : POSITION;////模型顶点位置，从mesh组件获取")]),a(`
`),n("span",{class:"line"},[n("span",null,"                float2 uv : TEXCOORD0;//模型顶点uv，uv就是模型上每个顶点带的一个用于决定在贴图中定位像素点的坐标。")]),a(`
`),n("span",{class:"line"},[n("span",null,"                //TEXCOORD0:texture coordinate 0")]),a(`
`),n("span",{class:"line"},[n("span",null,"            };")]),a(`
`),n("span",{class:"line"},[n("span")]),a(`
`),n("span",{class:"line"},[n("span",null,"            struct v2f//vertex to fragment")]),a(`
`),n("span",{class:"line"},[n("span",null,"            {")]),a(`
`),n("span",{class:"line"},[n("span",null,"                float2 uv : TEXCOORD0;//模型顶点uv")]),a(`
`),n("span",{class:"line"},[n("span",null,"                UNITY_FOG_COORDS(1)//后面再了解")]),a(`
`),n("span",{class:"line"},[n("span",null,"                float4 vertex : SV_POSITION;//模型顶点位置")]),a(`
`),n("span",{class:"line"},[n("span",null,"                //system value 其实就是模型在剪裁空间的位置，传给电脑")]),a(`
`),n("span",{class:"line"},[n("span",null,"            };")]),a(`
`),n("span",{class:"line"},[n("span",null,'		//定义Shader内部的变量，但是变量类型必须写明是什么，上面_Cutoff ("Alpha Cutoff", Range(0,1)) = 0.5  这个变量的类型写的是Range(0,1)，但是CG语言里面没有Range(0,1)，在这里必须写')]),a(`
`),n("span",{class:"line"},[n("span",null,"            //float _Cutoff;")]),a(`
`),n("span",{class:"line"},[n("span",null,"            //sample2D _MainTex;")]),a(`
`),n("span",{class:"line"},[n("span",null,"            //fixed4 _Color;    只有有这样一句定义，我们才能通过在引擎里面更改颜色达到更改物体颜色的效果，Unity才会把写的变量连接起来")]),a(`
`),n("span",{class:"line"},[n("span",null,"            sampler2D _MainTex;")]),a(`
`),n("span",{class:"line"},[n("span",null,"            float4 _MainTex_ST;")]),a(`
`),n("span",{class:"line"},[n("span")]),a(`
`),n("span",{class:"line"},[n("span",null,"            v2f vert (appdata v)")]),a(`
`),n("span",{class:"line"},[n("span",null,"            {")]),a(`
`),n("span",{class:"line"},[n("span",null,"                v2f o;//定义一个v2f类型的变量")]),a(`
`),n("span",{class:"line"},[n("span",null,"                o.vertex = UnityObjectToClipPos(v.vertex);")]),a(`
`),n("span",{class:"line"},[n("span",null,"                //完全可以写成o.vertex = mul(UNITY_MATRIX_MVP,v.vertex);")]),a(`
`),n("span",{class:"line"},[n("span",null,"                //UnityObjectToClipPos是新版本Unity新提供的封装好的api")]),a(`
`),n("span",{class:"line"},[n("span",null,"                //本质上就是实现了一次MVP变换")]),a(`
`),n("span",{class:"line"},[n("span",null,"                o.uv = TRANSFORM_TEX(v.uv, _MainTex);")]),a(`
`),n("span",{class:"line"},[n("span",null,"                UNITY_TRANSFER_FOG(o,o.vertex);")]),a(`
`),n("span",{class:"line"},[n("span",null,"                return o;")]),a(`
`),n("span",{class:"line"},[n("span",null,"            }")]),a(`
`),n("span",{class:"line"},[n("span")]),a(`
`),n("span",{class:"line"},[n("span",null,"            fixed4 frag (v2f i) : SV_Target//像素值的语义，不写这个语言颜色就不能正确地返回到模型上了")]),a(`
`),n("span",{class:"line"},[n("span",null,"            {")]),a(`
`),n("span",{class:"line"},[n("span",null,"                //可以写任何的颜色变换")]),a(`
`),n("span",{class:"line"},[n("span",null,"                // sample the texture")]),a(`
`),n("span",{class:"line"},[n("span",null,"                fixed4 col = tex2D(_MainTex, i.uv);//后面再了解")]),a(`
`),n("span",{class:"line"},[n("span",null,"                // apply fog")]),a(`
`),n("span",{class:"line"},[n("span",null,"                UNITY_APPLY_FOG(i.fogCoord, col);//后面再了解")]),a(`
`),n("span",{class:"line"},[n("span",null,"                return col;")]),a(`
`),n("span",{class:"line"},[n("span",null,"                //如果在这里return一个上面定义的颜色变量，那么就可以做到在编辑器里面实时更改物体颜色")]),a(`
`),n("span",{class:"line"},[n("span",null,"            }")]),a(`
`),n("span",{class:"line"},[n("span",null,"            ENDCG//CG语言部分结束")]),a(`
`),n("span",{class:"line"},[n("span",null,"        }")]),a(`
`),n("span",{class:"line"},[n("span",null,"    }")]),a(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"code-block-unfold-btn"})],-1))]),"main-header":l(()=>[t(e.$slots,"main-header")]),"main-header-after":l(()=>[t(e.$slots,"main-header-after")]),"main-nav":l(()=>[t(e.$slots,"main-nav")]),"main-content-before":l(()=>[t(e.$slots,"main-content-before")]),"main-content":l(()=>[t(e.$slots,"main-content")]),"main-content-after":l(()=>[t(e.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(e.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(e.$slots,"main-nav-after")]),comment:l(()=>[t(e.$slots,"comment")]),footer:l(()=>[t(e.$slots,"footer")]),aside:l(()=>[t(e.$slots,"aside")]),"aside-custom":l(()=>[t(e.$slots,"aside-custom")]),default:l(()=>[t(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{z as default,U as usePageData};
