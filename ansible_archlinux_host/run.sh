test -z $(which ansible-playbook) && sudo pacman -Sy ansible python2
ansible-playbook -i hosts --connection=local main.yml 
