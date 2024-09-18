/**
 * Represents a user of the blog.
 */
class BlogUser {
    /**
     * Creates a new BlogUser
     * @param {string} username - The username of the user.
     * @param {string} fullName - The full name of the user.
     */
    constructor(username, fullName) {
      this.username = username;
      this.fullName = fullName;
      this.blogPosts = [];
    }
  
    /**
     * Creates a new blog post.
     * @param {string} title - The title of the post.
     * @param {string} content - The content of the post.
     */
    createPost(title, content) {
      const post = new BlogPost(title, content, this.username);
      this.blogPosts.push(post);
      console.log(`~@${this.username}~ created: ${title}`);
    }
  
    /**
     * Edits an existing blog post.
     * @param {number} index - The index of the post to edit.
     * @param {string} newTitle - The new title of the post.
     * @param {string} newContent - The new content of the post.
     */
    editPost(index, newTitle, newContent) {
      // Checks if the index is valid
      if (index >= 0 && index < this.blogPosts.length) {
        const post = this.blogPosts[index];
        post.title = newTitle;
        post.content = newContent;
        console.log(`@${this.username} edited: ${newTitle}`);
      } else {
        console.log("Error: Post not found.");
      }
    }
  
    /**
     * Deletes the last blog post.
     */
    deleteLastPost() {
      if (this.blogPosts.length > 0) {
        const lastPost = this.blogPosts.pop();
        console.log(`Post deleted: ${lastPost.title} by @${this.username}`);
      } else {
        console.log("Error: No posts to delete.");
      }
    }
  
    /**
     * Displays all posts by the user.
     */
    displayPosts() {
      console.log(`Posts by @${this.username}:`);
      for (let i = 0; i < this.blogPosts.length; i++) {
        const post = this.blogPosts[i];
        // console.log(`${post.createdAt}`);
        console.log(`${post.createdAt}---------------BLOG END--------------`)

      }
    }
  }

  /**
 * Represents a blog post.
 */
class BlogPost {
    /**
     * Creates a new BlogPost.
     * @param {string} title - The title of the post.
     * @param {string} content - The content of the post.
     */
    constructor(title, content, author) {
      this.title = title;
      this.content = content;
      this.createdAt = new Date();
    }
  }


  // Create two BlogUsers
const user1 = new BlogUser("SpaceDweller", "Steven F. Scotts");
const user2 = new BlogUser("LogicFactory", "Stacey Lerato Sunday");

// Create some posts for each user
user1.createPost("Hi everyone, newbie here, representing the free mind association");
user1.createPost("Let`s get into it. . .  If there known unknowns, then how do you know what you don`t know?");
user1.displayPosts();

// Create some posts for the second user
user2.createPost("Hello World, First time on this platform. Super Thrilled :)");
user2.createPost("@SpaceDweller whooow there cowboy, How about some foreplay first #LaughingEmoji");
user2.displayPosts();

// Edit a post
user1.editPost(0, "Fine fine #chuckles What would you like to talk about?");
user1.displayPosts();

// Delete a post
user1.deleteLastPost();
user1.displayPosts();





