#ansible-playbook -i hosts "yum_update/book.yml" #--ask-sudo-pass
#ansible-playbook -i hosts "lamp/httpd.yml" #--ask-sudo-pass
#ansible-playbook -i hosts "remi/book.yml" #--ask-sudo-pass
ansible-playbook -i hosts "lamp/php.yml" #--ask-sudo-pass
