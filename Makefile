update:
	git checkout master
	git fetch upstream
	git rebase fetch/master
