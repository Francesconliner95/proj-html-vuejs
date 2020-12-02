var app = new Vue({
    el: '#root',
    data: {
        nav_items: ['Home', 'Pages', 'Courses', 'Features', 'Blog',  'Shop'],
        footer_items: {
            address:[
                '382 NE 191st St # 87394 Miami, FL 33179-3899',
                '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
                'support@maxcoach.com'
            ],
            explore:[
                'Start here',
                'Success story',
                'Blog',
                'Courses',
                'About us',
                'Contact us'
            ],
            information:[
                'Membership',
                'Purchase guide',
                'Privacy policy',
                'Terms of services',
            ]
        },
        socials: ['fa-facebook-square', 'fa-twitter', 'fa-instagram', 'fa-linkedin'],

    },

    methods: {

    },

    mounted: function(){

    },

})
