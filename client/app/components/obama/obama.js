import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './obama.html';
import './obama.scss';

// controller
export class ObamaController {
    ngInject;
  constructor() {
    'ngInject';

    this.display = "展示";
    this.use = "应用";
    this.work="工作";
    this.should="是的我们可以";
    this.product="生成";
    this.slides=["简介","原理","展示","应用"];
    this.describes=[
      {
        "description":"简介",
        "describe":"两年前，一个斯坦福叫Karpathy的博士，发布了一个神经网络字符级语言模型，这个模型接受人以文本的输入，并学习预测下一个字符，其中，用机器生成奥巴马的政治演讲就是一个比较成功的应用。该模型通过用大量字符文本数据，调用不同的参数训练完成，通过给模型一个关键字，就能生成新的字符。"
      },
      {
        "description":"原理",
        "describe":"人工神经网络是具有学习能力的，像人一样，不断的学习产生记忆，当输入新的文本的时候，他会 根据他之前学习过的字符去识别这些文本，然后自己生成新文字。"
      }
    ];
    this.talkshows=[
    {
      "show":"show",
      "imgurl":"/app/public/images/OB2.jpg",
      "hereProduct":"演讲稿将在这里生成......",
      "talk1":"下午好。上帝祝福你。",
      "talk2":"美国将加强美国人民的新挑战的成本，这将分享我们创造这个问题的事实。他们受到攻击，所以他们必须说，战争的最后几天的所有任务，我不能够得到这一点。男人和女人的承诺，仍然是要解决的事实，美国人民争取，以确保他们必须能够保护我们的部分。这是一个站在一起完全寻求从美国人民借来的承诺的机会。事实是，穿制服的男女和数百万国民以及法律制度，我们应该成为我们能够承受的力量的强大力量，以增加我们的美国人民的精神和我们的国家的领导在美国生活的互联网上。",
      "talk3":"这是第一次在美国穆斯林看到你自己的生活。美国将为美国人民带来更好的利润，安全和繁荣 - 她是同样经济衰退的候选人，他们必须确保他们在美国成为一个国家。"
    },
    {
      "show":"show1",
      "imgurl":"/app/public/images/OB2.jpg",
      "hereProduct":"演讲稿将在这里生成......",
      "talk1":"早上好。我们注意到他们可以与符合巴基斯坦和美利坚合众国国家的公司站在一起的事实。",
      "talk2":"有了金融系统，我们可以做到。而美国人民将无法继续支持美国人民最大的问题留在白宫的人民。这就是为什么我必须承认私营部门，毫无疑问，我们必须继续塑造我们是美利坚合众国的痛苦的认识。这些都是美国人民认识到大陆的原因，他们不必留在法律上的人民。",
      "talk3":"非常感谢你。上帝保佑你，上帝保佑美利坚合众国。"
    }
    
    ]
    this.musics=[
      {
       "writeMusic":"【编写音乐】",
       "imgurl":"/app/public/images/OB1.png",
       "createMusic":"通过学习一段新音乐，自己生成新音乐，已有成功的案例，生成的民间音乐",
       "musicUrl":"https://highnoongmt.wordpress.com/2015/05/22/lisls-stis-recurrent-neural-networks-for-folk-music-generation/",
       "musicType":"参考链接：民间音乐"
      },
      {
        "writeMusic":"【生成歌词】",
        "imgurl":"/app/public/images/OB3.jpg",
        createMusic:"网上已有成功案例，生成汪峰歌词",
        musicUrl:"https://ask.julyedu.com/question/7405",
        musicType:"参考链接：汪峰歌词"
      }
    ];
  }
}

// component
export const obamaComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: ObamaController,
  controllerAs: '$ctrl'
};

// module
let obamaModule = angular.module('obama', [
  uiRouter
])
// url router config
 .config(($stateProvider, $urlRouterProvider) => {
   "ngInject";
   $stateProvider
     .state('obama', {
       url: '/obama',
       component: 'obama'
     });
 })
.component('obama', obamaComponent)
.name;

export default obamaModule;
