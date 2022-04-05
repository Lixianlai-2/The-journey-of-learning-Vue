<templaa>
  <li>
    <div>
      <header>
        <h3>{{title}}}</h3>
        <button>
          Delete
        </button>
      </header>
    </div>
    <p>{{description}}</p>
    <nav>
      <a :href="link">View Resources</a>
    </nav>
  </li>
</templaa>

<script>
  export default {
    props:['title','description','link']
  }
</script>