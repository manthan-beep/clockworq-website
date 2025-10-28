import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
  isEmailVerified: boolean;
  lastLogin?: Date;
  profilePicture?: string;
  preferences?: {
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
  };
  subscription?: {
    status: 'active' | 'past_due' | 'canceled' | 'unpaid' | 'incomplete';
    plan: 'starter' | 'growth' | 'enterprise';
    stripeCustomerId: string;
    stripeSubscriptionId: string;
    currentPeriodEnd: Date;
    cancelAtPeriodEnd: boolean;
  };
  planFeatures?: {
    leadGeneration: boolean;
    whatsappIntegration: boolean;
    metaIntegration: boolean;
    reportsDashboard: boolean;
    leadsDashboard: boolean;
    agentCount: number;
    linkedinIntegration: boolean;
    emailAutomation: boolean;
    prioritySupport: boolean;
  };
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
  },
  firstName: {
    type: String,
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters'],
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters'],
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  lastLogin: {
    type: Date,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  preferences: {
    theme: {
      type: String,
      enum: ['light', 'dark'],
      default: 'dark',
    },
    notifications: {
      type: Boolean,
      default: true,
    },
    language: {
      type: String,
      default: 'en',
    },
  },
  //new
  subscription: {
    status: {
      type: String,
      enum: ['active', 'past_due', 'canceled', 'unpaid', 'incomplete'],
    },
    plan: {
      type: String,
      enum: ['starter', 'growth', 'enterprise'],
    },
    stripeCustomerId: {
      type: String,
    },
    stripeSubscriptionId: {
      type: String,
    },
    currentPeriodEnd: {
      type: Date,
    },
    cancelAtPeriodEnd: {
      type: Boolean,
      default: false,
    },
  },
  planFeatures: {
    leadGeneration: {
      type: Boolean,
      default: false,
    },
    whatsappIntegration: {
      type: Boolean,
      default: false,
    },
    metaIntegration: {
      type: Boolean,
      default: false,
    },
    reportsDashboard: {
      type: Boolean,
      default: false,
    },
    leadsDashboard: {
      type: Boolean,
      default: false,
    },
    agentCount: {
      type: Number,
      default: 0,
    },
    linkedinIntegration: {
      type: Boolean,
      default: false,
    },
    emailAutomation: {
      type: Boolean,
      default: false,
    },
    prioritySupport: {
      type: Boolean,
      default: false,
    },
  },
}, {
  timestamps: true,
});

// Index for better query performance
UserSchema.index({ email: 1 });

// Virtual for full name
UserSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`.trim();
});

// Ensure virtual fields are serialized
UserSchema.set('toJSON', {
  virtuals: true,
  transform: function(doc, ret) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj = ret as any;
    delete obj.password;
    delete obj.__v;
    return ret;
  },
});

// Ensure virtual fields are serialized
UserSchema.set('toObject', {
  virtuals: true,
  transform: function(doc, ret) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj = ret as any;
    delete obj.password;
    delete obj.__v;
    return ret;
  },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);