import{_ as e,r as t,o as l,c as p,a as n,b as c,d as s,e as i}from"./app.38ce91e0.js";const o={},d=n("h1",{id:"qq\u79C1\u6709\u5316\u90E8\u7F72\u6587\u6863",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#qq\u79C1\u6709\u5316\u90E8\u7F72\u6587\u6863","aria-hidden":"true"},"#"),s(" QQ\u79C1\u6709\u5316\u90E8\u7F72\u6587\u6863")],-1),r=n("h2",{id:"_1-\u4E0B\u8F7Dgo-cq",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u4E0B\u8F7Dgo-cq","aria-hidden":"true"},"#"),s(" 1. \u4E0B\u8F7Dgo-cq")],-1),u=s("\u524D\u5F80"),m={href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"},k=s("go-cqhttp release"),v=s("\u4E0B\u8F7D\u5BF9\u5E94\u7CFB\u7EDF\u7248\u672C\u3002"),b=i(`<h2 id="_2-\u914D\u7F6E\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E\u670D\u52A1" aria-hidden="true">#</a> 2. \u914D\u7F6E\u670D\u52A1</h2><p>\u89E3\u538B</p><blockquote><p>Windows\u4E0B\u8BF7\u4F7F\u7528\u81EA\u5DF1\u719F\u6089\u7684\u89E3\u538B\u8F6F\u4EF6\u81EA\u884C\u89E3\u538B</p></blockquote><blockquote><p>Linux\u4E0B\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165tar -xzvf [\u6587\u4EF6\u540D] \u4F7F\u7528</p></blockquote><p><strong>Windows \u6807\u51C6\u65B9\u6CD5</strong></p><p>\u53CC\u51FB\uFF0C\u6839\u636E\u63D0\u793A\u751F\u6210\u8FD0\u884C\u811A\u672Cgo-cqhttp_*.exe</p><p><code>[WARNING]: \u5C1D\u8BD5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6 config.yml \u5931\u8D25: \u6587\u4EF6\u4E0D\u5B58\u5728 [INFO]: \u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5DF2\u751F\u6210,\u8BF7\u7F16\u8F91 config.yml \u540E\u91CD\u542F\u7A0B\u5E8F.</code></p><p>\u914D\u7F6E\u6587\u4EF6\u8BF7\u53C2\u8003\u4E0B\u65B9config.yml</p><p>config.yml\u914D\u7F6E\u597D\u540E \u518D\u6B21\u53CC\u51FB\u8FD0\u884C\u811A\u672C</p><p><code>[INFO]: \u767B\u5F55\u6210\u529F \u6B22\u8FCE\u4F7F\u7528: balabala</code></p><p>\u5982\u51FA\u73B0\u9700\u8981\u8BA4\u8BC1\u7684\u4FE1\u606F, \u8BF7\u81EA\u884C\u8BA4\u8BC1\u8BBE\u5907\u3002</p><p>\u6B64\u65F6, \u57FA\u7840\u914D\u7F6E\u5B8C\u6210</p><p><strong>Linux \u6807\u51C6\u65B9\u6CD5</strong></p><p>\u901A\u8FC7 SSH \u8FDE\u63A5\u5230\u670D\u52A1\u5668</p><p>cd\u5230\u89E3\u538B\u76EE\u5F55</p><p>\u8F93\u5165 , \u8FD0\u884C <code>./go-cqhttp</code></p><p><code>[WARNING]: \u5C1D\u8BD5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6 config.yml \u5931\u8D25: \u6587\u4EF6\u4E0D\u5B58\u5728 [INFO]: \u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5DF2\u751F\u6210,\u8BF7\u7F16\u8F91 config.yml \u540E\u91CD\u542F\u7A0B\u5E8F.</code></p><p><strong>\u914D\u7F6Econfig.yml</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>
<span class="token comment"># go-cqhttp \u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6</span>

<span class="token key atrule">account</span><span class="token punctuation">:</span> <span class="token comment"># \u8D26\u53F7\u76F8\u5173</span>
  <span class="token key atrule">uin</span><span class="token punctuation">:</span>  <span class="token comment"># QQ\u8D26\u53F7</span>
  <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># \u5BC6\u7801\u4E3A\u7A7A\u65F6\u4F7F\u7528\u626B\u7801\u767B\u5F55</span>
  <span class="token key atrule">encrypt</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  <span class="token comment"># \u662F\u5426\u5F00\u542F\u5BC6\u7801\u52A0\u5BC6</span>
  <span class="token key atrule">status</span><span class="token punctuation">:</span> <span class="token number">0</span>      <span class="token comment"># \u5728\u7EBF\u72B6\u6001 \u8BF7\u53C2\u8003 https://docs.go-cqhttp.org/guide/config.html#\u5728\u7EBF\u72B6\u6001</span>
  <span class="token key atrule">relogin</span><span class="token punctuation">:</span> <span class="token comment"># \u91CD\u8FDE\u8BBE\u7F6E</span>
    <span class="token key atrule">delay</span><span class="token punctuation">:</span> <span class="token number">3</span>   <span class="token comment"># \u9996\u6B21\u91CD\u8FDE\u5EF6\u8FDF, \u5355\u4F4D\u79D2</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">3</span>   <span class="token comment"># \u91CD\u8FDE\u95F4\u9694</span>
    <span class="token key atrule">max-times</span><span class="token punctuation">:</span> <span class="token number">0</span>  <span class="token comment"># \u6700\u5927\u91CD\u8FDE\u6B21\u6570, 0\u4E3A\u65E0\u9650\u5236</span>

  <span class="token comment"># \u662F\u5426\u4F7F\u7528\u670D\u52A1\u5668\u4E0B\u53D1\u7684\u65B0\u5730\u5740\u8FDB\u884C\u91CD\u8FDE</span>
  <span class="token comment"># \u6CE8\u610F, \u6B64\u8BBE\u7F6E\u53EF\u80FD\u5BFC\u81F4\u5728\u6D77\u5916\u670D\u52A1\u5668\u4E0A\u8FDE\u63A5\u60C5\u51B5\u66F4\u5DEE</span>
  <span class="token key atrule">use-sso-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">heartbeat</span><span class="token punctuation">:</span>
  <span class="token comment"># \u5FC3\u8DF3\u9891\u7387, \u5355\u4F4D\u79D2</span>
  <span class="token comment"># -1 \u4E3A\u5173\u95ED\u5FC3\u8DF3</span>
  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">message</span><span class="token punctuation">:</span>
  <span class="token comment"># \u4E0A\u62A5\u6570\u636E\u7C7B\u578B</span>
  <span class="token comment"># \u53EF\u9009: string,array</span>
  <span class="token key atrule">post-format</span><span class="token punctuation">:</span> string
  <span class="token comment"># \u662F\u5426\u5FFD\u7565\u65E0\u6548\u7684CQ\u7801, \u5982\u679C\u4E3A\u5047\u5C06\u539F\u6837\u53D1\u9001</span>
  <span class="token key atrule">ignore-invalid-cqcode</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u662F\u5426\u5F3A\u5236\u5206\u7247\u53D1\u9001\u6D88\u606F</span>
  <span class="token comment"># \u5206\u7247\u53D1\u9001\u5C06\u4F1A\u5E26\u6765\u66F4\u5FEB\u7684\u901F\u5EA6</span>
  <span class="token comment"># \u4F46\u662F\u517C\u5BB9\u6027\u4F1A\u6709\u4E9B\u95EE\u9898</span>
  <span class="token key atrule">force-fragment</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u662F\u5426\u5C06url\u5206\u7247\u53D1\u9001</span>
  <span class="token key atrule">fix-url</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u4E0B\u8F7D\u56FE\u7247\u7B49\u8BF7\u6C42\u7F51\u7EDC\u4EE3\u7406</span>
  <span class="token key atrule">proxy-rewrite</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token comment"># \u662F\u5426\u4E0A\u62A5\u81EA\u8EAB\u6D88\u606F</span>
  <span class="token key atrule">report-self-message</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u79FB\u9664\u670D\u52A1\u7AEF\u7684Reply\u9644\u5E26\u7684At</span>
  <span class="token key atrule">remove-reply-at</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u4E3AReply\u9644\u52A0\u66F4\u591A\u4FE1\u606F</span>
  <span class="token key atrule">extra-reply-data</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">output</span><span class="token punctuation">:</span>
  <span class="token comment"># \u65E5\u5FD7\u7B49\u7EA7 trace,debug,info,warn,error</span>
  <span class="token key atrule">log-level</span><span class="token punctuation">:</span> warn
  <span class="token comment"># \u662F\u5426\u542F\u7528 DEBUG</span>
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># \u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F</span>

<span class="token comment"># \u9ED8\u8BA4\u4E2D\u95F4\u4EF6\u951A\u70B9</span>
<span class="token key atrule">default-middlewares</span><span class="token punctuation">:</span> <span class="token important">&amp;default</span>
  <span class="token comment"># \u8BBF\u95EE\u5BC6\u94A5, \u5F3A\u70C8\u63A8\u8350\u5728\u516C\u7F51\u7684\u670D\u52A1\u5668\u8BBE\u7F6E</span>
  <span class="token key atrule">access-token</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token comment"># \u4E8B\u4EF6\u8FC7\u6EE4\u5668\u6587\u4EF6\u76EE\u5F55</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token comment"># API\u9650\u901F\u8BBE\u7F6E</span>
  <span class="token comment"># \u8BE5\u8BBE\u7F6E\u4E3A\u5168\u5C40\u751F\u6548</span>
  <span class="token comment"># \u539F cqhttp \u867D\u7136\u542F\u7528\u4E86 rate_limit \u540E\u7F00, \u4F46\u662F\u57FA\u672C\u6CA1\u63D2\u4EF6\u9002\u914D</span>
  <span class="token comment"># \u76EE\u524D\u8BE5\u9650\u901F\u8BBE\u7F6E\u4E3A\u4EE4\u724C\u6876\u7B97\u6CD5, \u8BF7\u53C2\u8003:</span>
  <span class="token comment"># https://baike.baidu.com/item/%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95/6597000?fr=aladdin</span>
  <span class="token key atrule">rate-limit</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># \u662F\u5426\u542F\u7528\u9650\u901F</span>
    <span class="token key atrule">frequency</span><span class="token punctuation">:</span> <span class="token number">1</span>  <span class="token comment"># \u4EE4\u724C\u56DE\u590D\u9891\u7387, \u5355\u4F4D\u79D2</span>
    <span class="token key atrule">bucket</span><span class="token punctuation">:</span> <span class="token number">1</span>     <span class="token comment"># \u4EE4\u724C\u6876\u5927\u5C0F</span>

<span class="token key atrule">database</span><span class="token punctuation">:</span> <span class="token comment"># \u6570\u636E\u5E93\u76F8\u5173\u8BBE\u7F6E</span>
  <span class="token key atrule">leveldb</span><span class="token punctuation">:</span>
    <span class="token comment"># \u662F\u5426\u542F\u7528\u5185\u7F6Eleveldb\u6570\u636E\u5E93</span>
    <span class="token comment"># \u542F\u7528\u5C06\u4F1A\u589E\u52A010-20MB\u7684\u5185\u5B58\u5360\u7528\u548C\u4E00\u5B9A\u7684\u78C1\u76D8\u7A7A\u95F4</span>
    <span class="token comment"># \u5173\u95ED\u5C06\u65E0\u6CD5\u4F7F\u7528 \u64A4\u56DE \u56DE\u590D get_msg \u7B49\u4E0A\u4E0B\u6587\u76F8\u5173\u529F\u80FD</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># \u8FDE\u63A5\u670D\u52A1\u5217\u8868</span>
<span class="token key atrule">servers</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6DFB\u52A0\u65B9\u5F0F\uFF0C\u540C\u4E00\u8FDE\u63A5\u65B9\u5F0F\u53EF\u6DFB\u52A0\u591A\u4E2A\uFF0C\u5177\u4F53\u914D\u7F6E\u8BF4\u660E\u8BF7\u67E5\u770B\u6587\u6863</span>
  <span class="token comment">#- http: # http \u901A\u4FE1</span>
  <span class="token comment">#- ws:   # \u6B63\u5411 Websocket</span>
  <span class="token comment">#- ws-reverse: # \u53CD\u5411 Websocket</span>
  <span class="token comment">#- pprof: #\u6027\u80FD\u5206\u6790\u670D\u52A1\u5668</span>
  <span class="token comment"># HTTP \u901A\u4FE1\u8BBE\u7F6E</span>
  <span class="token punctuation">-</span> <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token comment"># \u670D\u52A1\u7AEF\u76D1\u542C\u5730\u5740</span>
      <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
      <span class="token comment"># \u670D\u52A1\u7AEF\u76D1\u542C\u7AEF\u53E3</span>
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5700</span>
      <span class="token comment"># \u53CD\u5411HTTP\u8D85\u65F6\u65F6\u95F4, \u5355\u4F4D\u79D2</span>
      <span class="token comment"># \u6700\u5C0F\u503C\u4E3A5\uFF0C\u5C0F\u4E8E5\u5C06\u4F1A\u5FFD\u7565\u672C\u9879\u8BBE\u7F6E</span>
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
        <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*default</span> <span class="token comment"># \u5F15\u7528\u9ED8\u8BA4\u4E2D\u95F4\u4EF6</span>
      <span class="token comment"># \u53CD\u5411HTTP POST\u5730\u5740\u5217\u8868</span>
      <span class="token key atrule">post</span><span class="token punctuation">:</span>
      <span class="token comment">#- url: &#39;&#39; # \u5730\u5740</span>
      <span class="token comment">#  secret: &#39;&#39;           # \u5BC6\u94A5</span>
      <span class="token comment">#- url: 127.0.0.1:5701 # \u5730\u5740</span>
      <span class="token comment">#  secret: &#39;&#39;          # \u5BC6\u94A5</span>
 
      



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u8FD0\u884C<code>./go-cqhttp</code></p><p><code>[INFO]: \u767B\u5F55\u6210\u529F \u6B22\u8FCE\u4F7F\u7528: balabala</code></p><p>\u5982\u51FA\u73B0\u9700\u8981\u8BA4\u8BC1\u7684\u4FE1\u606F, \u8BF7\u81EA\u884C\u8BA4\u8BC1\u8BBE\u5907\u3002</p><p>\u6B64\u65F6, \u57FA\u7840\u914D\u7F6E\u5B8C\u6210</p><h2 id="\u6CE8\u610F-\u5C06\u4F60\u914D\u7F6E\u7684\u7AEF\u53E3\u53F7\u5728\u9632\u706B\u5899\u91CC\u9762\u653E\u884C\u6216\u8005\u4F7F\u7528\u53CD\u5411\u4EE3\u7406\u5C06\u4F60\u8BBE\u7F6E\u7684\u7AEF\u53E3\u7ED1\u5B9A\u5230\u57DF\u540D" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F-\u5C06\u4F60\u914D\u7F6E\u7684\u7AEF\u53E3\u53F7\u5728\u9632\u706B\u5899\u91CC\u9762\u653E\u884C\u6216\u8005\u4F7F\u7528\u53CD\u5411\u4EE3\u7406\u5C06\u4F60\u8BBE\u7F6E\u7684\u7AEF\u53E3\u7ED1\u5B9A\u5230\u57DF\u540D" aria-hidden="true">#</a> \u6CE8\u610F:\u5C06\u4F60\u914D\u7F6E\u7684\u7AEF\u53E3\u53F7\u5728\u9632\u706B\u5899\u91CC\u9762\u653E\u884C\u6216\u8005\u4F7F\u7528\u53CD\u5411\u4EE3\u7406\u5C06\u4F60\u8BBE\u7F6E\u7684\u7AEF\u53E3\u7ED1\u5B9A\u5230\u57DF\u540D</h2><h2 id="\u6CE8\u610F-\u516C\u7F51\u4F7F\u7528\u4E00\u5B9A\u8981\u914D\u7F6Etoken" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F-\u516C\u7F51\u4F7F\u7528\u4E00\u5B9A\u8981\u914D\u7F6Etoken" aria-hidden="true">#</a> \u6CE8\u610F:\u516C\u7F51\u4F7F\u7528\u4E00\u5B9A\u8981\u914D\u7F6Etoken</h2><h2 id="_3-twikoo\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-twikoo\u914D\u7F6E" aria-hidden="true">#</a> 3. twikoo\u914D\u7F6E</h2><p>\u5728twikoo\u4E2DQQ\u79C1\u6709\u5316API\u914D\u7F6E\u9879\u586B\u5199\u5982\u4E0B\u5185\u5BB9</p><p>QQ\u53F7 <code>http://\u4F60\u7684IP\u5730\u5740\uFF1A\u7AEF\u53E3\u53F7\uFF08\u6216\u8005\u57DF\u540D\uFF09/send_private_msg?user_id=QQ\u53F7?token=\u4F60\u914D\u7F6E\u7684token</code></p><p>QQ\u7FA4 <code>http://\u4F60\u7684IP\u5730\u5740\uFF1A\u7AEF\u53E3\u53F7\uFF08\u6216\u8005\u57DF\u540D\uFF09/send_group_msg?token=\u4F60\u914D\u7F6E\u7684token?group_id=\u7FA4\u53F7</code></p><p>\u914D\u7F6E\u5B8C\u6210</p>`,30);function h(y,g){const a=t("ExternalLinkIcon");return l(),p("div",null,[d,r,n("p",null,[u,n("a",m,[k,c(a)]),v]),b])}var f=e(o,[["render",h],["__file","QQ_API.html.vue"]]);export{f as default};
