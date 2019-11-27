package myrestful;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class Daoimplementation implements Dao {

	@Autowired
	SessionFactory sf;
	

	public Pojo register(Pojo p) {
		System.out.println("i AM IN POJO");
		
		Transaction t= sf.getCurrentSession().beginTransaction();
		sf.getCurrentSession().save(p);
		t.commit();
		return null;
	}

}
