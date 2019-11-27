package Mall;

public class Comment {
	String comment;

	

	public Comment() {
		super();
	}
	public Comment(String comment) {
		super();
		this.comment = comment;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
	@Override
	public String toString() {
		return "Comment [comment=" + comment + "]";
	}
	

}
