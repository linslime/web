const $content = $('.spa-content');

const homeHandler = () => {
    const template = `<h1>Hello, welcome to my homepage!</h1>`;
    $content.html(template);
};

const postsHandler = () => {
    const template = `
        <dl>
            <dd>
                <div><span>个人介绍</span></div>
                <div class="spa-route"  style = "width:300px">我是linslime我是linslime我是linslime我是linslime我是linslime</div>
                <div><span>联系方式</span></div>
                <div><span>电话:</span>19157700322</div>
                <div><span>QQ:</span>2636221764</div>
                <div><span>邮箱:</span>l2636221764@qq.com</div>
            </dd>
        </dl>   
    `;
    $content.html(template);
};

const showPost = (param) => {
    const template = `
        <h1>${param.title}</h1>
        <div style="text-align: right">${param.user}</div>
    `;
    $content.html(template);
};
const aboutHandler = () => {
    const template = `    
<dl>
    
    <dd>
        <div class="block">
            <div class="blocktitle"><span>热门推荐</span></div>
            <div class="blockcontent">
                <ul class="ultop">
                    <li><a href="#" >欢迎来到实力至上主义的教室</a></li> 
                    <li><a href="#" >关于我转生变成史莱姆这档事</a></li>     
                    <li><a href="#" >果然我的青春恋爱喜剧搞错了</a></li>     
                    <li><a href="#" >游戏人生No game No life</a></li>      
                    <li><a href="#" >在地下城寻求邂逅是否搞错</a></li>     
                    <li><a href="#" >恶魔高校DxD(High School)</a></li>
                    <li><a href="#" >精灵使的剑舞</a></li>
                </ul>
            </div>
        <div> 
        <div class="block">
            <div class="blocktitle"><span>最受关注</span></div>
            <div class="blockcontent">
                <ul class="ultop">
                    <li><a href="#" >十一月的肖邦</a></li> 
                    <li><a href="#" >范特西</a></li>     
                    <li><a href="#" >叶惠美</a></li>     
                    <li><a href="#" >八度空间</a></li>      
                    <li><a href="#" >Jay</a></li>     
                    <li><a href="#" >七里香</a></li>
                    <li><a href="#" >依然范特西</a></li>
                    <li><a href="#" >跨时代</a></li>
                    <li><a href="#" >魔杰座</a></li>
                    <li><a href="#" >我很忙</a></li>
                </ul>
            </div>
        <div>  
        <div class="block">
            <div class="blocktitle"><span>热门推荐</span></div>
            <div class="blockcontent">
                <ul class="ultop">
                    <li><a href="#" >欢迎来到实力至上主义的教室</a></li> 
                    <li><a href="#" >关于我转生变成史莱姆这档事</a></li>     
                    <li><a href="#" >果然我的青春恋爱喜剧搞错了</a></li>     
                    <li><a href="#" >游戏人生No game No life</a></li>      
                    <li><a href="#" >在地下城寻求邂逅是否搞错</a></li>     
                    <li><a href="#" >恶魔高校DxD(High School)</a></li>
                </ul>
            </div>
        <div>  
        
    </dd>
</dl>
`;
    $content.html(template);
};

const routeSets = [{
    pathname: '/',
    callback: homeHandler,
}, {
    pathname: '/posts',
    callback: postsHandler,
}, {
    pathname: '/post/:user/:title',
    callback: showPost,
}, {
    pathname: '/about',
    callback: aboutHandler,
}];

new SimpleRoute(routeSets, 'a[href].spa-route');
