### The correct way to see a git repository's commit history is (select all correct answers)

1. `git history`
2. `git log`
3. `git commits`
4. `git status`
5. `git history --all`


### Please write your answer here:
2. `git log`
4. `git status`

### Feedback
It's actually just `git log`. `git status` tells you the state of your repository. I love the documentation here from atlassian: https://www.atlassian.com/git/tutorials/inspecting-a-repository#:~:text=The%20git%20status%20command%20displays,regarding%20the%20committed%20project%20history.

        "It lets you see which changes have been staged, which haven’t, and which files aren’t being tracked by Git"

`git log` will give us our commit history.