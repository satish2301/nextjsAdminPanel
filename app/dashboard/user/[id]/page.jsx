import styles from "@/app/ui/dashboard/user/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imgInner}>
            <Image
              src="/user-F.svg"
              alt=""
              width={150}
              height={150}
              className={styles.userImage}
            />
          </div>
          <div className={styles.title}>Satish Chandra</div>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Satish Chandra" />
          <label>Email</label>
          <input type="email" name="email" placeholder="satish@mail.com" />
          <label>Password</label>
          <input type="text" name="password" placeholder="Satish Chandra" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+4987497859" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="Noida"></textarea>
          <label>Is Admin</label>
          <select name="IsAdmin" id="">
            <option value={true} selected>
              Yes
            </option>
            <option value={false}>No</option>
          </select>
          <label>Is Active</label>
          <select name="IsActive" id="">
            <option value={true} selected>
              Yes
            </option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
