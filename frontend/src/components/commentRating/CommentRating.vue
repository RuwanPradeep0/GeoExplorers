<script>
export default {
  name: 'CommentRating', // Component name : this is also a component , but not a separate one
  data() {
    return {
      rating: 0, // Initial rating value
      newComment: '', // New comment input value
      comments: [] // Array to store comments
    }
  },

  //you should have to export the following functions also , if not it will show errors

  methods: {

    setRating(value) {
      // Method to set the rating value
      this.rating = value
    },

    addComment() {
      // Method to add a new comment : in here i have used javascript
      if (this.newComment.trim() !== '') {

        // Check if the new comment is not empty
        const newComment = {

          id: Date.now(), // Generate a unique ID for the comment
          text: this.newComment, // Comment text
          author: 'Anonymous', // Comment author (hardcoded for simplicity : if not have to implement a backend to store comments)
          date: new Date().toISOString() // Comment date
        }

        this.comments.push(newComment) // Add the new comment to the comments array ussing push methos
        this.newComment = ''  // Reset the new comment input value
      }
    },

    formatDate(dateString) {
      // Method to format the date string
      const date = new Date(dateString)
      return date.toLocaleDateString() // this is an inbuild function in java script
    }
  }
}
</script>

<template>
  <div class="comment-rating">
    <div class="rating">
      <h3>Rating</h3>
      <div class="rating-stars">

        <!-- Loop through 5 stars -->
        <span
          v-for="index in 5"
          :key="index"
          :class="{ 'filled': index <= rating, 'empty': index > rating }"
          @click="setRating(index)"
        >

          &#9733; <!-- Star icon -->
        </span>

      </div>
    </div>

    <div class="comments">
      <h3>Comments</h3>
      <div class="comment-input">

        <!-- Comment input field -->
        <textarea v-model="newComment" placeholder="Write a comment..."></textarea>

        <!-- Submit button to add a new comment -->
        <button @click="addComment">Submit</button>
      </div>

      <div class="comment-list">
        <!-- Loop through comments and display them -->
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <p>{{ comment.text }}</p>
          <div class="comment-meta">
            <span>{{ comment.author }}</span>
            <span>{{ formatDate(comment.date) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
 
  
  <style scoped>
    @import './commentRating.vue.css';
  
  </style>