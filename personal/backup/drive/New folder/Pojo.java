package myrestful;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Pojo {
	String name;
	String post;
	@Id
	@GeneratedValue
	int id;
	
	public Pojo() {
		super();
	}
	public Pojo(String name, String post, int id) {
		super();
		this.name = name;
		this.post = post;
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	

}
