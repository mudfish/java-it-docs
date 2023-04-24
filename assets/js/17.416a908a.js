(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{363:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"关闭防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙"}},[s._v("#")]),s._v(" 关闭防火墙")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl stop firewalld.service\nsystemctl disable firewalld.service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\nsystemctl status firewalld.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"解决xshell-ssh登录慢问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决xshell-ssh登录慢问题"}},[s._v("#")]),s._v(" 解决Xshell ssh登录慢问题")]),s._v(" "),a("p",[s._v("编辑文件："),a("code",[s._v("vi /etc/ssh/sshd_config")]),s._v("\n找到GSSAPIAuthentication值改为no\n找到UseDNS，将注释放开，值改为yes\n保存文件。\n执行命令，重启sshd"),a("br"),s._v(" "),a("code",[s._v("systemctl restart sshd")])]),s._v(" "),a("h2",{attrs:{id:"关闭selinux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭selinux"}},[s._v("#")]),s._v(" 关闭selinux")]),s._v(" "),a("p",[s._v("vi /etc/selinux/config "),a("br"),s._v("\nSELINUX=disabled （设置安全选项关闭,重启生效）")]),s._v(" "),a("h2",{attrs:{id:"配置双机ssh免密访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置双机ssh免密访问"}},[s._v("#")]),s._v(" 配置双机SSH免密访问")]),s._v(" "),a("p",[s._v("1）修改/etc/ssh/sshd_config "),a("br"),s._v(" "),a("code",[s._v("vim /etc/ssh/sshd_config")]),s._v("\n将PermitRootLogin yes的注释去掉，然后保存，重启ssh："),a("br"),s._v(" "),a("code",[s._v("systemctl restart sshd")])]),s._v(" "),a("p",[s._v("2）root用户分别执行")]),s._v(" "),a("ul",[a("li",[s._v("生成密钥 "),a("br"),s._v(" "),a("code",[s._v("ssh-keygen -t rsa")])]),s._v(" "),a("li",[s._v("查看密钥 "),a("br"),s._v(" "),a("code",[s._v("cat ~/.ssh/id_rsa.pub")])]),s._v(" "),a("li",[s._v("分别将密钥传输到对方机器")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.56.101\nssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.56.100\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("分别添加/ect/hosts "),a("br"),s._v("\n192.168.56.101 wszwgk01 "),a("br"),s._v("\n192.168.56.102 wszwgk02")]),s._v(" "),a("li",[s._v("测试\n"),a("code",[s._v("ssh wszwgk01")])])]),s._v(" "),a("h2",{attrs:{id:"配置静态ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置静态ip"}},[s._v("#")]),s._v(" 配置静态IP")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/sysconfig/network-scripts/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ifcfg-enpOs3 ifcfg-enpOs8\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ifcfg-enpOs8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("修改后：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Ethernet\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("static\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEFROUTE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PEERDNS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PEERROUTES")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV4_FAILURE_FATAL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6INIT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_AUTOCONF")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_DEFROUTE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_PEERDNS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_PEERROUTES")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_FAILURE_FATAL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_ADDR_GEN_MODE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("stable-privacy\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("enp0s8\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("d89f6702-9f65-4961-a8a6-1872ad61ac19\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("enp0s8\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.101\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);