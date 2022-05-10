const data = {
  categories: [
    {
      name: 'Linux/service',
      description: 'Server Commands',
      commands: [
        {
          command: 'sudo systemctl enable X_domain_X.service',
          name: '',
          description: 'service enable',
        },
        {
          command: 'sudo systemctl start X_domain_X.service',
          name: '',
          description: 'Server Commands',
        },
        {
          command: 'sudo systemctl status X_domain_X.service',
          name: '',
          description: 'Server Commands',
        },
        {
          command: 'sudo nano /etc/systemd/system/X_domain_X.service',
          name: '',
          description: 'Server Commands',
        },
      ],
    },
    {
      name:'Nginx/config',
      commands: [
        {
          command: `server {
        listen 80 ;
        root /var/www/X_domain_X/html/public;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name X_domain_X www.X_domain_X;
        location / {
                try_files $uri $uri/ /index.php?$query_string;
        }
        location ~ \\.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/run/php/phpX_php_v_X-fpm.sock;
        }
         location ~ /.well-known {
                allow all;
        }
}`,
          name: 'Laravel Config',
          description: 'This Is Nginx Config File For Laravel',
        },
        {
          command: `server {
        listen 80;
        root /var/www/X_domain_X/html;
        index index.html ;
        server_name X_domain_X *.X_domain_X;
        location / {
                        try_files $uri $uri/ /index.html;
        }
}`,
          name: 'Angular Config',
          description: '',
        },
        {
          command: `server {
        listen 80;
        root /var/www/X_domain_X/html;
        index index.html ;
        server_name X_domain_X *.X_domain_X;
        location / {
                     try_files $uri $uri/ =404;
        }
}`,
          name: 'Static Website',
          description: '',
        },
        {
          command: `server {
                listen 80;
                server_name   X_domain_X;
                location / {
                                proxy_pass         http://localhost:X_port_X;
                                proxy_http_version 1.1;
                                proxy_set_header   Upgrade $http_upgrade;
                                proxy_set_header   Connection keep-alive;
                                proxy_set_header   Host $host;
                                proxy_cache_bypass $http_upgrade;
                                proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
                                proxy_set_header   X-Forwarded-Proto $scheme;
                }
}`,
          name: '.Net Core Config',
          description: '',
        },
      ]
    },
    {
      name: 'Nginx/common',
      commands: [
          {
            command: `sudo systemctl restart nginx`,
            name: 'nginx restart',
            description: '',
          },
          {
            command: `sudo systemctl stop nginx`,
            name: 'nginx stop',
            description: '',
          },
          {
            command: `sudo systemctl status nginx`,
            name: 'nginx status',
            description: '',
          },
          {
            command: `sudo nginx -t`,
            name: 'test config files',
            description: '',
          },
          {
            command: 'sudo ln -s /etc/nginx/sites-available/X_domain_X /etc/nginx/sites-enabled',
            name: '',
            description: 'Create Link To Sites Enable Folder To Enable Config',
          },
        {
          command: 'sudo nano /etc/nginx/sites-available/X_domain_X',
          name: '',
          description: 'Create Nginx Config File',
        },
      ]
    },
    {
      name: 'Linux/common',
      commands: [
        {
          command: 'sudo mkdir -p /var/www/X_domain_X/html',
          name: '',
          description: 'Create Folder For Project',
        },
        {
          command: 'sudo chmod 777 -R /var/www/X_domain_X/html/',
          name: 'Change Permissions For Folder',
          description: 'Above Command Gives All Permissions So Change According Your Requirements ',
        },
        {
          command: 'cd /var/www/X_domain_X/html',
          name: '',
          description: 'Go To That Folder',
        },
        {
          command: 'sudo git clone X_git_url_X .',
          name: '',
          description: 'Clone Project',
        },
      ]
    }
  ],
  params: [
    {
      name: 'Domain',
      value: 'X_domain_X',
      example: 'weybee.in',
    },
    {
      name: 'Port',
      value: 'X_port_X',
      example: '8000',
    },
    {
      name: 'Git Url',
      value: 'X_git_url_X',
      example: '',
    },
    {
      name: 'Php version',
      value: 'X_php_v_X ',
      example: '7.4',
    },
  ],
};

export default data;
