Vue.component('sub-menu', {
    props: ['menus', 'fold'],
    methods: {
        openTab(data) {
            window.app.openTab(data);
        }
    },
    template: `
        <div>
            <template v-for="(item,i) in menus" :key="item.eid">
                <el-menu-item :index="item.eid" v-if="!item.models" @click="openTab(item,item.eid)">
                    <i :class="'menu-icon '+item.icon"></i>
                    <span v-show="!fold" class="prompt-menu-label">
                        {{item.name}}
                        <span v-if="item.badge" class="prompt-menu-badge">{{item.badge}}</span>
                    </span>
                </el-menu-item>
                <el-submenu :index="item.eid" v-else>
                    <template slot="title">
                        <i :class="'menu-icon '+item.icon"></i>
                        <span v-show="!fold" class="prompt-menu-label">
                            {{item.name}}
                            <span v-if="item.badge" class="prompt-menu-badge">{{item.badge}}</span>
                        </span>
                    </template>
                    <sub-menu :menus="item.models" :fold="fold"></sub-menu>
                </el-submenu>
            </template>
        </div>
    `
});

Vue.component('multiple-menu', {
    props: ['menus', 'menuActive', 'fold'],
    template: `
        <el-menu :unique-opened="true" :default-active="menuActive" :collapse="fold" :collapse-transition="true">
            <sub-menu :menus="menus" :fold="fold"></sub-menu>
        </el-menu>
    `
});

(function () {
    const style = document.createElement('style');
    style.textContent = `
        .prompt-menu-label { display: inline-flex; align-items: center; gap: 8px; }
        .prompt-menu-badge {
            display: inline-grid; place-items: center; min-width: 18px; height: 18px;
            padding: 0 5px; border-radius: 999px; color: #fff; background: #e53935;
            font-size: 11px; font-weight: 700; line-height: 18px;
            box-shadow: 0 0 0 2px rgba(229, 57, 53, 0.15);
        }
    `;
    document.head.appendChild(style);
})();
