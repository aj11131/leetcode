
class TrieNode {
  endOfWord = false;
  children: {[index: string]: TrieNode} = {}
}

class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string): void {
    let current = this.root;
    for (let c of word) {
      if (!current.children[c]) current.children[c] = new TrieNode();
      current = current.children[c];
    }
    current.endOfWord = true;
  }

  search(word: string): boolean {
    let current = this.root;
    for (let c of word) {
      if (!current.children[c]) return false;
      current = current.children[c];
    }
    return current.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;
    for (let c of prefix) {
      if (!current.children[c]) return false;
      current = current.children[c];
    }
    return true;
  }
}


/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/

const obj = new Trie();
obj.insert('app');

obj.insert('app');
console.log(obj.search('app'));